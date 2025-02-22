# coding=utf-8

import datetime
import time
from Queue import Full as QueueIsFull
from multiprocessing import Queue, Event

from consumer import Consumer, ignore_signal


class Allocator(object):

    """分配者，初始化：
    retrieve_items: 取item的方法，由具体业务决定
    consume: 消费item的方法，由业务决定，传递给consumer
    consumer_count: 消费者个数
    working_time: 工作时间，形如[('00:00', '12:00')]
    poison: 分配者自身的毒药"""

    def __init__(self, retrieve_items, consume, consumer_count, working_time, poison, consume_timeout = None):
        self.retrieve_items = retrieve_items
        self.consume = consume
        self.consumer_count = consumer_count
        self.queue = Queue(consumer_count)
        self.working_time = self.parse_working_time(working_time)
        self.poison = poison
        self.consume_timeout = consume_timeout

    def parse_working_time(self, working_time):
        """解析工作时间"""
        result_list = []
        if not working_time:
            result_list = ((datetime.time(0, 0), datetime.time(23, 59)),)
        else:
            for i in working_time:
                result_list.append((datetime.time(*map(int, i[0].split(':'))),
                                    datetime.time(*map(int, i[1].split(':')))
                                    ))
        return result_list

    def is_time_todo(self):
        """当前是否是工作时间"""
        nowtime = datetime.datetime.now().time()
        for i in self.working_time:
            if i[1] >= nowtime and i[0] <= nowtime:
                return True
        return False

    def wake_consumer(self):
        """唤醒消费者"""
        self.consumer_poison_list = []
        self.consumer_list = []
        for _ in xrange(self.consumer_count):
            tmp_poison = Event()
            consumer = Consumer(queue = self.queue, poison = tmp_poison, consume = self.consume)
            consumer.start()
            self.consumer_poison_list.append(tmp_poison)
            self.consumer_list.append(consumer)

    def add_items(self, item_list):
        """将item放到broker中"""
        while item_list:
            try:
                item = item_list.pop()
                self.queue.put(item, block = True, timeout = 1)
            except IndexError:
                break
            except QueueIsFull:
                item_list.append(item)
                time.sleep(20)

    def start(self):
        """开始工作"""
        ignore_signal()
        self.wake_consumer()
        while not self.poison.is_set():
            if self.is_time_todo():
                item_list = self.get_items(need_count = self.consumer_count - self.queue.qsize())
                self.add_items(item_list)
            time.sleep(10)

        self.stop()

    def get_items(self, need_count):
        """从仓库中取items"""
        if need_count > 0:
            try:
                return self.retrieve_items(need_count)
            except Exception:
                return []
        else:
            return []

    def stop(self):
        """将消费者的毒药激活，并等待他们执行完毕"""
        for poison in self.consumer_poison_list:
            poison.set()
        for consumer in self.consumer_list:
            consumer.join(self.consume_timeout) # 如果消费操作超时，则强制终止掉
            if self.consume_timeout and consumer.is_alive():
                consumer.terminate()
                consumer.join()

