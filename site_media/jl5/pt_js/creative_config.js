/**
    直线
    var line1 = new Kinetic.Line({
        points: [14, 138, 124 * 2 + 14, 138],
        stroke: "#fff",
        strokeWidth: 2
    });

    虚线
    var line1 = new Kinetic.Line({
        points: [14, 138, 124 * 2 + 14, 138],
        stroke: "#fff",
        strokeWidth: 2
    });
    line1.dash([10, 8]);

    绘画文本
    var text = new Kinetic.Text({
        text: 'test',
        fontFamily: 'FZZZHJT',
        fontSize: 60,
        padding: 10,
        fill: 'white',
        width: 360,
        align: 'center',
        draggable: true
    });

    绘画fonticon
    var text = new Kinetic.Text({
        text: String.fromCharCode("0xe600"),
        fontFamily: 'ICON',
        fontSize: 60,
        padding: 10,
        fill: 'white',
        width: 360,
        align: 'center',
        draggable: true
    });

    绘画矩形
    var text = new Kinetic.Rect({
        x : 400,
        y : 150,
        width : 100,
        height : 100,
        fill : "red"
    });

    绘画星星
    var star = new Kinetic.Star({
      x: 100,
      y: 200,
      numPoints: 80,
      innerRadius: 60,
      outerRadius: 70,
      fill: 'red',
      stroke: 'red',
      strokeWidth: 4
    });

    绘画多边形
    var hexagon = new Kinetic.RegularPolygon({
        x: 100,
        y: 200,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    虚线圆
    var circle = new Kinetic.Circle({
        x: 124 + 26,
        y: 124 + 26,
        radius: 124,
        stroke: "#fff",
        strokeWidth: 4
    });

    自定义路径
    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
          context.beginPath();
          context.moveTo(0, 140);
          context.lineTo(150,180);
          context.lineTo(135,230);
          context.lineTo(0, 280);
          context.closePath();
          context.fillStrokeShape(this);
        },
        fill: '#35395c',
    });

    文字路径【data值请参考svg】
    var textpath = new Kinetic.TextPath({
        fill: '#fff',
        fontSize: 55,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        data: 'M30,110 L110,30',
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {x:1, y:1},
    });

    嵌入图形
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,xxxxxx'
    var image = new Kinetic.Image({
        x: 200,
        y: 50,
        image: imageObj,
        width: 100,
        height: 100
    });

    #半圆&饼
    var wedge = new Kinetic.Wedge({
        radius: 40,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        angleDeg: 60,
        rotationDeg: -120
    });

    #扇形
    var arc = new Kinetic.Arc({
        innerRadius: 40,
        outerRadius: 80,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        angle: 60,
        rotationDeg: -120
    });

    #利用svg中贝塞尔曲线模拟角度不超过90度的圆（item_25的虚线可用）
    var path = new Kinetic.Path({
        x: 0,
        y: 0,
        data: 'M10,0 L10 160 C10,225,75,225,75,225 C140,225,140,160,140,160 L140,0',
        stroke: '#fff',
        strokeWidth: 4
    });
    path.dash([10, 8]);

    #很屌的一个例子
    scale=(400/800)*0.5;
    scale1=(370/800)*0.5;
    scale2=(320/800)*0.5;
    var path = new Kinetic.Path({
        x: 0,
        y: 800*scale,
        data: 'M591.272 791.040c0 0-300.56 21.105-506.692-157.31-108.838-94.204-72.254-203.041-72.254-204.871 0 0 25.826-92.905 183.836-151.824 107.924-40.245 82.374-96.243 82.374-96.243s-16.978-41.404-37.102-64.27c-5.488-31.553 18.751-48.931 43.441-39.787 13.565 5.022 120.729 62.192 154.57 160.972 489.314 21.951 560.654 244.199 568.886 289.014 0 0 11.585 53.659 0 58.534-22.978 11.338-417.060 205.786-417.060 205.786z',
        stroke: '#bcbcbc',
        strokeWidth: 1,
        fillLinearGradientStartPoint: {x:0, y:0},
        fillLinearGradientEndPoint: {x:500,y:800},
        fillLinearGradientColorStops: [0.9, '#fff', 1, '#bcbcbc'],
        scale:{x:scale,y:-scale}
    });

    var path1 = new Kinetic.Path({
        x: 40*scale1,
        y: (800+40)*scale1,
        data: 'M562.208 793.683c0 0-286.064 11.53-479.575-155.97-102.177-88.437-67.83-190.615-67.83-192.331 0 0 24.25-87.221 172.586-142.533 101.319-37.78 107.189-78.461 107.189-78.461s11.086-58.533-7.804-79.998c-5.152-29.626-54.634-64.387-26.341-47.804 12.731 4.716 130.73 66.338 150.24 172.679 536.565 19.511 590.301 246.701 598.031 288.773 0 0 5.021 38.346-5.854 42.928-18.518 9.137-185.36 93.893-372.67 191.45-0.001 0-0.326 1.44-67.965 1.277z',
        fill:config.color1,
        scale:{x:scale1,y:-scale1}
    });

    var path2 = new Kinetic.Path({
        x: (800-50)*scale2,
        y: (800+5)*scale2,
        data: 'M2.042 797.182c0 0 185.488-256.343 367.827-282.579 109.718-15.787 149.972 0.788 172.071 11.841z',
        stroke: '#bdbdbd',
        strokeWidth: 1,
        fillLinearGradientStartPoint: {x:422, y:624},
        fillLinearGradientEndPoint: {x:378,y:538},
        fillLinearGradientColorStops: [0.3,'#bcbcbc', 0.8,'#f6f6f6', 1, '#d5d5d5'],
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: -2,
            y: 2
        },
        scale:{x:scale2,y:-scale2}
    });

    #渐变文字
    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(100, 100, 200, 200);
            grad.addColorStop(0, 'orange');
            grad.addColorStop(0.4, 'red');
            grad.addColorStop(1, 'blue');
            ctx.fillStyle = grad;
            ctx.font = "69px verdana";
            ctx.fillText("createLinearGradient", 0, 70);
            context.fillStrokeShape(this);
        }
    });

*/


//风格配置
ImageDrawManager.prototype.style_config = {
    '1_1': [{
        x: 0,
        y: 560,
        index: 20,
        group: 1
    }, {
        x: 260,
        y: 600,
        index: 21,
        group: 2
    }],
    '1_2': [{
        x: 20,
        y: 320,
        index: 22,
        group: 1
    }, {
        x: 40,
        y: 600,
        index: 23,
        group: 2
    }],
    '1_3': [{
        x: 600,
        y: 0,
        index: 24,
        group: 1
    }, {
        x: 20,
        y: 280,
        index: 25,
        group: 2
    }, {
        x: 20,
        y: 600,
        index: 26,
        group: 3
    }],
    '1_4': [{
        x: 500,
        y: 500,
        index: 27,
        group: 1
    }, {
        x: 0,
        y: 685,
        index: 28,
        group: 2
    }],
    '1_5': [{
        x: 489,
        y: 400,
        index: 29,
        group: 1
    }, {
        x: 0,
        y: 670,
        index: 30,
        group: 2
    }],
    '1_6': [{
        x: 20,
        y: 470,
        index: 31,
        group: 1
    }, {
        x: 0,
        y: 680,
        index: 32,
        group: 2
    }],
    '2_1': [{
        x: 0,
        y: 714,
        index: 91,
        group: 1
    }],
    '2_2': [{
        x: 570,
        y: 440,
        index: 31,
        config_id: 'c_6',
        group: 1
    },{
        x: 550,
        y: 600,
        index: 92,
        group: 2
    }],
    '2_3': [{
        x: 0,
        y: 700,
        index: 56,
        config_id: 'c_7',
        group: 1
    },{
        x: 420,
        y: 600,
        index: 93,
        group: 2
    }],
    '2_4': [{
        x: 516,
        y: 449,
        index: 94,
        group: 1
    },{
        x: 0,
        y: 700,
        index: 95,
        group: 2
    }],
    '2_5': [{
        x: 557,
        y: 355,
        index: 96,
        group: 1
    },{
        x: 350,
        y: 611,
        index: 97,
        group: 2
    }],
    '2_6': [{
        x: 429,
        y: 528,
        index: 98,
        group: 1
    },{
        x: 73,
        y: 602,
        index: 99,
        group: 2
    }],
    '3_1': [{
        x: 18,
        y: 500,
        index: 77,
        group: 1
    },{
        x: 140,
        y: 666,
        index: 78,
        group: 2
    }],
    '3_2': [{
        x: 578,
        y: 411,
        index: 79,
        group: 1
    },{
        x: 0,
        y: 620,
        index: 80,
        group: 2
    }],
    '3_3': [{
        x: 0,
        y: 675,
        index: 81,
        group: 1
    },{
        x: 625,
        y: 0,
        index: 82,
        group: 2
    },{
        x: 20,
        y: 565,
        index: 83,
        group: 3
    }],
    '3_4': [{
        x: 52,
        y: 510,
        index: 84,
        group: 1
    },{
        x: 492,
        y: 510,
        index: 85,
        group: 2
    }],
    '3_5': [{
        x: 32,
        y: 408,
        index: 86,
        group: 1
    },{
        x: 154,
        y: 619,
        index: 88,
        group: 3
    },{
        x: 10,
        y: 556,
        index: 87,
        group: 2
    }],
    '3_6': [{
        x: 0,
        y: 370,
        index: 89,
        group: 1
    },{
        x: 436,
        y: 567,
        index: 90,
        group: 2
    }],
    '4_1': [{
        x: 20,
        y: 500,
        index: 47,
        group: 1
    },{
        x: 0,
        y: 670,
        index: 69,
        group: 2
    }],
    '4_2': [{
        x: 20,
        y: 480,
        index: 47,
        config_id:'c_4',
        group: 1
    },{
        x: 0,
        y: 650,
        index: 48,
        config_id:'c_5',
        group: 2
    },{
        x: 689,
        y: 607,
        index: 70,
        group: 3
    }],
    '4_3': [{
        x: 0,
        y: 500,
        index: 71,
        group: 1
    },{
        x: 20,
        y: 637,
        index: 72,
        group: 2
    }],
    '4_4': [{
        x: 0,
        y: 620,
        index: 73,
        group: 1
    },{
        x: 0,
        y: 700,
        index: 74,
        group: 2
    }],
    '4_5': [{
        x: 50,
        y: 660,
        index: 76,
        group: 2
    },{
        x: 20,
        y: 600,
        index: 75,
        group: 1
    }],
    '4_6': [{
        x: 531,
        y: 280,
        index: 100,
        group: 1
    },{
        x: 514,
        y: 508,
        index: 101,
        group: 2
    }],
    '5_1': [{
        x: 0,
        y: 560,
        index: 33,
        group: 1
    }, {
        x: 260,
        y: 380,
        index: 34,
        group: 2
    }],
    '5_2': [{
        x: 50,
        y: 350,
        index: 35,
        group: 1
    }, {
        x: 20,
        y: 580,
        index: 36,
        group: 2
    }],
    '5_3': [{
        x: 0,
        y: 450,
        index: 37,
        group: 1
    }, {
        x: 0,
        y: 685,
        index: 38,
        group: 2
    }],
    '5_4': [{
        x: 0,
        y: 450,
        index: 39,
        group: 1
    }, {
        x: 530,
        y: 450,
        index: 40,
        group: 2
    }],
    '5_5': [{
        x: 0,
        y: 570,
        index: 42,
        group: 1
    }, {
        x: 570,
        y: 520,
        index: 41,
        group: 2
    }],
    '5_6': [{
        x: 650,
        y: 0,
        index: 43,
        group: 1
    }, {
        x: 0,
        y: 300,
        index: 44,
        group: 2
    }, {
        x: 0,
        y: 700,
        index: 45,
        group: 3
    }],
    '6_1': [{
        x: 0,
        y: 600,
        index: 57,
        group: 1
    },{
        x: 520,
        y: 540,
        index: 58,
        group: 2
    }],
    '6_2': [{
        x: 0,
        y: 449,
        index: 59,
        group: 1
    },{
        x: 480,
        y: 600,
        index: 60,
        group: 2
    }],
    '6_3': [{
        x: 609,
        y: 0,
        index: 61,
        group: 1
    },{
        x: 535,
        y: 450,
        index: 62,
        group: 2
    },{
        x: 0,
        y: 700,
        index: 56,
        config_id:'c_3',
        group: 3
    }],
    '6_4': [{
        x: 516,
        y: 442,
        index: 63,
        group: 1
    },{
        x: 400,
        y: 660,
        index: 64,
        group: 2
    }],
    '6_5': [{
        x: 0,
        y: 550,
        index: 65,
        group: 1
    },{
        x: 300,
        y: 620,
        index: 66,
        group: 2
    }],
    '6_6': [{
        x: 0,
        y: 655,
        index: 67,
        group: 1
    },{
        x: 479,
        y: 584,
        index: 68,
        group: 2
    }],
    '7_1': [{
        x: 0,
        y: 600,
        index: 46,
        group: 1
    }, {
        x: 500,
        y: 600,
        index: 47,
        group: 2
    }],
    '7_2': [{
        x: 0,
        y: 450,
        index: 47,
        config_id: 'c_1',
        group: 1
    }, {
        x: 0,
        y: 650,
        index: 48,
        group: 2
    }],
    '7_3': [{
        x: 570,
        y: 0,
        index: 49,
        group: 1
    }, {
        x: 570,
        y: 400,
        index: 50,
        group: 2
    }],
    '7_4': [{
        x: 0,
        y: 715,
        index: 51,
        group: 1
    }, {
        x: 12.5,
        y: 650,
        index: 52,
        group: 2
    }],
    '7_5': [{
        x: 20,
        y: 640,
        index: 53,
        group: 1
    }, {
        x: 252,
        y: 640,
        index: 54,
        group: 2
    }],
    '7_6': [{
        x: 600,
        y: 20,
        index: 55,
        group: 1
    },{
        x: 450,
        y: 300,
        index: 31,
        config_id: 'c_2',
        group: 2
    },{
        x: 0,
        y: 700,
        index: 56,
        group: 3
    }],
    '8_1': [{
        x: 0,
        y: 640,
        index: 10,
        group: 1
    }],
    '8_2': [{
        x: 0,
        y: 640,
        index: 5,
        group: 1
    }],
    '8_3': [{
        x: 0,
        y: 0,
        index: 1,
        group: 1
    }, {
        x: 0,
        y: 690,
        index: 3,
        group: 2
    }],
    '8_4': [{
        x: 0,
        y: 0,
        index: 2,
        group: 1
    }, {
        x: 0,
        y: 0,
        index: 16,
        group: 2
    }],
    '8_5': [{
        x: 0,
        y: 0,
        index: 4,
        group: 1
    }, {
        x: 0,
        y: 0,
        index: 16,
        group: 2
    }],
    '8_6': [{
        x: 0,
        y: 0,
        index: 6,
        group: 1
    }, {
        x: 0,
        y: 0,
        index: 16,
        group: 2
    }],
    '8_7': [{
        x: 0,
        y: 0,
        index: 7,
        group: 1
    }, {
        x: 0,
        y: 0,
        index: 16,
        group: 2
    }],
    '8_8': [{
        x: 0,
        y: 0,
        index: 7,
        group: 1
    }, {
        x: 0,
        y: 690,
        index: 3,
        group: 2
    }],
    '8_9': [{
        x: 0,
        y: 0,
        index: 8,
        group: 1
    }, {
        x: 0,
        y: 690,
        index: 3,
        group: 2
    }],
    '8_10': [{
        x: 0,
        y: 0,
        index: 8,
        group: 1
    }, {
        x: 0,
        y: 0,
        index: 16,
        group: 2
    }],
    '8_11': [{
        x: 0,
        y: 0,
        index: 9,
        group: 1
    }, {
        x: 0,
        y: 690,
        index: 3,
        group: 2
    }],
    '8_12': [{
        x: 0,
        y: 0,
        index: 9,
        group: 1
    }, {
        x: 0,
        y: 0,
        index: 16,
        group: 2
    }],
    '8_13': [{
        x: 0,
        y: 0,
        index: 4,
        group: 1
    }, {
        x: 0,
        y: 200,
        index: 18,
        group: 2
    }]
}

//单个标签位置配置
ImageDrawManager.prototype.single_tag_config={
    '3':{
        x:0,
        y:690
    },
    '10':{
        x:0,
        y:640
    },
    '20':{
        x:0,
        y:570
    },
    '21':{
        x:200,
        y:570
    },
    '25':{
        x:0,
        y:100
    },
    '26':{
        x:0,
        y:640
    },
    '28':{
        x:0,
        y:675
    },
    '30':{
        x:0,
        y:675
    },
    '31':{
        x:0,
        y:640
    },
    '32':{
        x:0,
        y:640
    },
    '34':{
        x:0,
        y:420
    },
    '36':{
        x:0,
        y:600
    },
    '37':{
        x:0,
        y:600
    },
    '38':{
        x:0,
        y:680
    },
    '39':{
        x:0,
        y:380
    },
    '42':{
        x:0,
        y:680
    },
    '45':{
        x:0,
        y:700
    },
    '46':{
        x:0,
        y:620
    },
    '47':{
        x:0,
        y:640
    },
    '48':{
        x:0,
        y:640
    },
    '50':{
        x:0,
        y:640
    },
    '51':{
        x:0,
        y:640
    },
    '52':{
        x:0,
        y:640
    },
    '53':{
        x:0,
        y:640
    },
    '54':{
        x:0,
        y:640
    },
    '56':{
        x:0,
        y:700
    },
    '57':{
        x:0,
        y:700
    },
    '59':{
        x:0,
        y:400
    },
    '60':{
        x:450,
        y:600
    },
    '61':{
        x:610,
        y:0
    },
    '62':{
        x:560,
        y:560
    },
    '63':{
        x:0,
        y:640
    },
    '64':{
        x:0,
        y:680
    },
    '65':{
        x:0,
        y:570
    },
    '66':{
        x:0,
        y:680
    },
    '67':{
        x:0,
        y:680
    },
    '68':{
        x:0,
        y:590
    },
    '69':{
        x:0,
        y:690
    },
    '70':{
        x:690,
        y:610
    },
    '71':{
        x:0,
        y:680
    },
    '72':{
        x:40,
        y:640
    },
    '73':{
        x:0,
        y:690
    },
    '74':{
        x:0,
        y:690
    },
    '76':{
        x:40,
        y:680
    },
    '78':{
        x:120,
        y:680
    },
    '80':{
        x:0,
        y:620
    },
    '81':{
        x:0,
        y:680
    },
    '84':{
        x:40,
        y:500
    },
    '86':{
        x:0,
        y:640
    },
    '87':{
        x:0,
        y:560
    },
    '88':{
        x:0,
        y:650
    },
    '89':{
        x:0,
        y:680
    },
    '90':{
        x:440,
        y:600
    },
    '91':{
        x:0,
        y:700
    },
    '92':{
        x:560,
        y:600
    },
    '93':{
        x:0,
        y:700
    },
    '94':{
        x:0,
        y:640
    },
    '95':{
        x:0,
        y:700
    },
    '96':{
        x:0,
        y:550
    },
    '97':{
        x:380,
        y:600
    },
    '98':{
        x:0,
        y:700
    },
    '99':{
        x:80,
        y:620
    },
    '100':{
        x:10,
        y:600
    },
    '101':{
        x:20,
        y:530
    }
}

//模板文字配置
ImageDrawManager.prototype.template = {
    '1': {
        price: '79',
        desc1: "包邮",
        color1: '#c40000'
    },
    '2': {
        price: '79.00',
        desc1: "新品特惠",
        color1: '#c40000'
    },
    '3': {
        desc1: "月销千件即将涨价",
        color1: '#c40000'
    },
    '4': {
        price: "38.00",
        desc1: "包邮",
        color1: '#c40000'
    },
    '5': {
        price: "38.00",
        desc1: "包邮",
        desc2: "月销千件",
        color1: '#c40000'
    },
    '6': {
        price: "38.00",
        desc1: "月销千件",
        color1: '#c40000'
    },
    '7': {
        desc1: "热卖",
        color1: '#c40000'
    },
    '8': {
        desc1: "热卖",
        color1: '#c40000'
    },
    '9': {
        desc1: "劲减",
        desc2: "30%",
        color1: '#c40000'
    },
    '10': {
        desc1: "劲减",
        desc2: "30%",
        price1: "199",
        price2: "249",
        color1: '#ff417e',
        color2: '#393939'
    },
    '11': {
        desc1: "20",
        desc2: "SALE",
        color1: '#7fc3c0',
        color2: '#35395c'
    },
    '12': {
        desc1: "20",
        desc2: "SALE",
        color1: "#f18cab",
        color2: "#35395c"
    },
    '13': {
        desc1: "fantastic",
        desc2: "offer",
        color1: "#e24675",
        color2: "#2f3557"
    },
    '14': {
        desc1: "limited",
        desc2: "offer",
        color1: "#2f3557",
        color2: "#3bb6c7"
    },
    '15': {
        desc1: "Sale",
        color1: "#e24675",
        color2: "#2f3557"
    },
    '16': {
        desc1: "年中大促限时抢购"
    },
    '17': {
        desc1: "年中大促限时抢购",
        color1: "#d52527",
        color2: "#d87f30"
    },
    '18': {
        desc1: "年中大促",
        desc2: "大码",
        color1: "#c40000"
    },
    '19': {
        desc1: "年中大促",
        color1: "#c40000"
    },
    '20': {
        desc1: '76元包邮'
    },
    '21': {
        desc1: '大爱',
        desc2: '小清新'
    },
    '22': {
        desc1: '109',
        desc2: '包邮',
        color1: '#00f5ff'
    },
    '23': {
        desc1: '夏季女装',
        desc2: '清新脱俗',
        color1: '#00a8ff'
    },
    '24': {
        desc1: '热卖',
        color1: '#6eb92b'
    },
    '25': {
        desc1: '199',
        desc2: '特卖',
        color1: '#aacd06',
        color2: '#6eb92b'
    },
    '26': {
        desc1: '热销千件',
        desc2: '买二送一',
        color1: '#6eb92b'
    },
    '27': {
        desc1: '88元'
    },
    '28': {
        desc1: '热卖',
        desc2: '热销千件厂家直销'
    },
    '29': {
        desc1: '69元',
        desc2: '包邮'
    },
    '30': {
        desc1: '热销千件',
        desc2: '厂家直销'
    },
    '31': {
        desc1: '经典时尚',
        desc2: '精致美观',
        color1: '#deff00',
        color2: '#272c3d',
        fontsize1:60,
        fontsize2:60
    },
    '32': {
        desc1: '¥88元包邮'
    },
    '33': {
        desc1: '奢华精品',
        color1: '#ffea03'
    },
    '34': {
        desc1: '¥288元包邮',
        color1: '#000',
        color2: '#ffea03',
    },
    '35': {
        desc1: '奢华',
        desc2: '精致'
    },
    '36': {
        desc1: '79元',
        desc2: '包邮'
    },
    '37': {
        desc1: '79元',
        desc2: '包邮'
    },
    '38': {
        desc1: '热卖',
        desc2: '热销千件厂家直销'
    },
    '39': {
        desc1: '79元',
        desc2: '包邮'
    },
    '40': {
        desc1: '奢华',
        desc2: '精致'
    },
    '41': {
        desc1: '188元'
    },
    '42': {
        desc1: '经典时尚精致美观'
    },
    '43': {
        desc1: '热卖'
    },
    '44': {
        desc1: '经典',
        desc2: '精致',
    },
    '45': {
        desc1: '热销千件厂家直销',
        desc2: '¥188',
    },
    '46': {
        desc1: '199',
        desc2: '包邮',
        desc3: '特卖',
        color1: '#ff2400'
    },
    '47': {
        desc1: '周年庆典',
        desc2: '特惠促销',
        color1: '#ff2400',
        color2: '#fff'
    },
    '48': {
        desc1: '299.00',
        desc2: '199',
        desc3: '包邮',
        color1: '#f30100',
        color2: '#fff',
        color3: '#000',
        color4: "#ffd800"
    },
    '49': {
        desc1: '99',
        desc2: '包邮'
    },
    '50': {
        desc1: '引领',
        desc2: '时尚',
        color1: '#e80000',
        color2: '#fff'
    },
    '51': {
        desc1: '特价',
        desc2: '¥58.00'
    },
    '52': {
        desc1: '夏季新款特价热卖'
    },
    '53': {
        desc1: '夏季新款',
        desc2: '特价热卖'
    },
    '54': {
        desc1: '¥188.00',
        desc2: '包邮'
    },
    '55': {
        desc1: '99',
        desc2: '包邮'
    },
    '56': {
        desc1: '热销千件厂家直销',
        color1: '#f00'
    },
    '57': {
        desc1: '单品热卖顺丰包邮'
    },
    '58': {
        desc1: '199',
        desc2: '包邮'
    },
    '59': {
        desc1: '欧美时尚',
        desc2: 'FASHION'
    },
    '60': {
        desc1: '特卖',
        desc2: '299'
    },
    '61': {
        desc1: 'HOT'
    },
    '62': {
        desc1: '199',
        desc2: '包邮'
    },
    '63': {
        desc1: '热卖单品',
        desc2: '欧美简约'
    },
    '64': {
        desc1: '¥158.00',
        desc2: '包邮'
    },
    '65': {
        desc1: '158',
        desc2: '包邮'
    },
    '66': {
        desc1: '夏季新款特价热卖'
    },
    '67': {
        desc1: '夏季新款'
    },
    '68': {
        desc1: '199元'
    },
    '69': {
        desc1: '199',
        desc2: '包邮'
    },
    '70': {
        desc1: '特卖'
    },
    '71': {
        desc1: '简约而不简单'
    },
    '72': {
        desc1: '热卖',
        desc2: '99',
        desc3: '包邮',
    },
    '73': {
        desc1: '夏季新款特价热卖'
    },
    '74': {
        desc1: '¥158.00'
    },
    '75': {
        desc1: '188',
        desc2: '包邮'
    },
    '76': {
        desc1: '夏季新款特价热卖'
    },
    '77': {
        desc1: '199'
    },
    '78': {
        desc1: '单品热卖顺丰包邮'
    },
    '79': {
        desc1: '199',
        desc2: '包邮'
    },
    '80': {
        desc1: '单品热卖顺丰包邮'
    },
    '81': {
        desc1: '单品热卖顺丰包邮'
    },
    '82': {
        desc1: 'HOT'
    },
    '83': {
        desc1: '188',
        desc2: '包邮'
    },
    '84': {
        desc1: '不一样的魅力'
    },
    '85': {
        desc1: '198',
        desc2: '包邮'
    },
    '86': {
        desc1: '夏季',
        desc2: '女装'
    },
    '87': {
        desc1: '198',
        desc2: '包邮'
    },
    '88': {
        desc1: '特价热卖'
    },
    '89': {
        desc1: '热卖单品'
    },
    '90': {
        desc1: '限时折扣',
        desc2: '¥199',
        desc3: '包邮',
    },
    '91': {
        desc1: '单卖热品',
        desc2: '888'
    },
    '92': {
        desc1: '299',
        desc2: '促销'
    },
    '93': {
        desc1: '限时折扣',
        desc2: '¥199.00'
    },
    '94': {
        desc1: '热卖单品',
        desc2: '欧美简约'
    },
    '95': {
        desc1: '聚划算',
        desc2: '¥199.00',
        desc3: '16日开团'
    },
    '96': {
        desc1: '我行我素',
        desc2: '纯棉修身'
    },
    '97': {
        desc1: '休闲T恤',
        desc2: '品牌价：189元',
        desc3: '品牌价：¥99'
    },
    '98': {
        desc1: '活动价',
        desc2: '¥199.00'
    },
    '99': {
        desc1: 'HOT IN SUMMER',
        desc2: '夏季热卖/2件包邮'
    },
    '100': {
        desc1: '夏季新款特价热卖'
    },
    '101': {
        desc1: '特价',
        desc2: '99',
        desc3: '包邮'
    },
    'c_1': {
        desc1: '引领时尚',
        desc2: '奢华时尚',
        color1: '#ff2400',
        color2: '#000000'
    },
    'c_2': {
        desc1: '夏季新款',
        desc2: '特价热卖',
        color1: '#000',
        color2: '#ff0000',
        fontsize1:80,
        fontsize2:70
    },
    'c_3': {
        desc1: '热卖单品欧美时尚',
        color1: '#ff7e00'
    },
    'c_4': {
        desc1: '引领时尚',
        desc2: '奢华时尚',
        color1: '#bb1d57',
        color2: '#000000'
    },
    'c_5':{
        desc1: '299.00',
        desc2: '199',
        desc3: '包邮',
        color1: '#42235f',
        color2: '#fff',
        color3: '#bb1d57',
        color4: "#fff"
    },
    'c_6':{
        desc1: '单品热卖',
        desc2: '顺丰包邮',
        color1: '#000',
        color2: '#000',
        fontsize1:50,
        fontsize2:50
    },
    'c_7':{
        desc1: '热卖单品欧美时尚',
        color1: '#fff'
    }
}

//以下是各种实现模板的函数

ImageDrawManager.prototype.group_item_1 = function(group, config) {

    var text1 = new Kinetic.Text({
        fontSize: 80,
        fontFamily: "FZCHJT",
        text: config.price,
        align: "center",
        fill: "#fff"
    });

    var radii = Math.sqrt(Math.pow(text1.getWidth() / 2, 2) + Math.pow(text1.getFontSize(), 2)) + 14;

    text1.setWidth(radii * 2);
    text1.setY(radii - 75);

    var circle1 = new Kinetic.Circle({
        x: radii,
        y: radii,
        radius: radii,
        fill: config.color1
    });
    var circle2 = new Kinetic.Circle({
        x: radii,
        y: radii,
        radius: radii - 14,
        stroke: "#fff",
        strokeWidth: 3
    });
    circle2.dash([10, 5]);
    var line1 = new Kinetic.Line({
        points: [14, radii, (radii - 14) * 2 + 14, radii],
        stroke: "#fff",
        strokeWidth: 2
    });
    line1.dash([10, 8]);

    var text2 = new Kinetic.Text({
        x: 0,
        y: radii + 10,
        fontSize: 55,
        fontFamily: "微软雅黑",
        text: config.desc1,
        align: "center",
        width: radii * 2,
        fill: "#fff"
    });

    group.add(circle1);
    group.add(circle2);
    group.add(line1);
    group.add(text1);
    group.add(text2);
}


ImageDrawManager.prototype.group_item_2 = function(group, config) {

    var text4 = new Kinetic.Text({
        x: 10 + 45,
        // y: 180,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 40,
        padding: 0,
        fill: '#fff'
    });

    var text5 = new Kinetic.Text({
        x: 40 + 45,
        // y: 140,
        text: config.price.match(/\d*/)[0],
        fontFamily: 'IMPACTR',
        fontSize: 80,
        padding: 0,
        fill: '#fff'
    });

    var text6 = new Kinetic.Text({
        x: 40 + 45 + text5.getWidth(),
        // y: 170,
        text: config.price.match(/\.\d*/) && config.price.match(/\.\d*/)[0],
        fontFamily: 'IMPACTR',
        fontSize: 50,
        padding: 0,
        fill: '#fff'
    });

    var total_width = text4.getWidth() + text5.getWidth() + text6.getWidth();
    var radii = Math.sqrt(Math.pow(total_width / 2, 2) + Math.pow(text5.getFontSize(), 2));


    text4.setY(radii + 60);
    text5.setY(radii + 20);
    text6.setY(radii + 50);


    var text3 = new Kinetic.Text({
        x: 0,
        y: radii - 40,
        fontSize: 40,
        fontFamily: "微软雅黑",
        text: config.desc1,
        align: "center",
        width: radii * 2 + 50,
        fill: "#fff"
    });

    var text1 = new Kinetic.Text({
        x: 0,
        y: 0,
        text: String.fromCharCode("0xe600"),
        fontFamily: 'ICON',
        fontSize: radii * 2 + 50,
        padding: 0,
        fill: config.color1,
        align: 'center'
    });

    var circle2 = new Kinetic.Circle({
        x: (radii * 2 + 50) / 2,
        y: (radii * 2 + 50) / 2,
        radius: (radii * 2 + 50) / 2 - 20,
        stroke: "#fff",
        strokeWidth: 4
    });
    circle2.dash([10, 5]);

    group.add(text1);
    group.add(circle2);
    // group.add(text2);
    group.add(text3);
    group.add(text4);
    group.add(text5);
    group.add(text6);
}


ImageDrawManager.prototype.group_item_3 = function(group, config) {

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 800,
        height: 110,
        fill: config.color1
    });

    var text = new Kinetic.Text({
        x: 0,
        y: 20,
        fontSize: 80,
        fontFamily: "FZCHJT",
        text: config.desc1.slice(0, 4),
        align: "center",
        width: 400,
        fill: "#fff"
    });

    var text1 = new Kinetic.Text({
        x: 400,
        y: 20,
        fontSize: 80,
        fontFamily: "FZCHJT",
        text: config.desc1.slice(4, 8),
        align: "center",
        width: 400,
        fill: "#fff"
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
}


ImageDrawManager.prototype.group_item_4 = function(group, config) {


    var text1 = new Kinetic.Text({
        x: 10,
        y: 40,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 40,
        padding: 0,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: 40,
        y: 5,
        text: config.price.match(/\d*/)[0],
        fontFamily: 'IMPACTR',
        fontSize: 80,
        padding: 0,
        fill: '#fff'
    });

    var text3 = new Kinetic.Text({
        x: 40 + text2.getWidth(),
        y: 31,
        text: config.price.match(/\.\d*/) && config.price.match(/\.\d*/)[0],
        fontFamily: 'IMPACTR',
        fontSize: 50,
        padding: 0,
        fill: '#fff'
    });

    var total_width = text1.getWidth() + text2.getWidth() + text3.getWidth() + 30;

    var text4 = new Kinetic.Text({
        y: 105,
        text: config.desc1,
        fontFamily: 'LTH',
        fontSize: 50,
        padding: 0,
        align: "center",
        width: total_width,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        width: total_width,
        height: 160,
        fill: config.color1
    });

    var line = new Kinetic.Line({
        points: [0, 100, total_width, 100],
        stroke: "#fff",
        strokeWidth: 2
    });

    line.dash([10, 5]);

    group.add(rect);
    group.add(line);
    group.add(text1);
    group.add(text2);
    group.add(text3);
    group.add(text4);
}

ImageDrawManager.prototype.group_item_5 = function(group, config) {

    var text1 = new Kinetic.Text({
        x: 10,
        y: 40,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 40,
        padding: 0,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: 40,
        y: 5,
        text: config.price.match(/\d*/),
        fontFamily: 'IMPACTR',
        fontSize: 80,
        padding: 0,
        fill: '#fff'
    });

    var text3 = new Kinetic.Text({
        x: 40 + text2.getWidth(),
        y: 31,
        text: config.price.match(/\.\d*/)?config.price.match(/\.\d*/)[0]:'.00',
        fontFamily: 'IMPACTR',
        fontSize: 50,
        padding: 0,
        fill: '#fff'
    });

    var total_width = text1.getWidth() + text2.getWidth() + text3.getWidth() + 30;

    var rect1 = new Kinetic.Rect({
        x: total_width,
        width: 400,
        height: 160,
        fill: '#000',
        opacity: .4
    });

    var rect = new Kinetic.Rect({
        width: total_width,
        height: 160,
        fill: config.color1
    });


    var line = new Kinetic.Line({
        points: [0, 100, total_width, 100],
        stroke: "#fff",
        strokeWidth: 2
    });

    line.dash([10, 5]);

    var text4 = new Kinetic.Text({
        y: 105,
        text: config.desc1,
        fontFamily: 'LTH',
        fontSize: 50,
        padding: 0,
        align: "center",
        width: total_width,
        fill: '#fff'
    });

    var text5 = new Kinetic.Text({
        x: total_width,
        y: 40,
        text: config.desc2,
        fontFamily: 'FZYY',
        fontSize: 80,
        padding: 0,
        align: "center",
        width: 400,
        fill: '#fff'
    });

    group.add(rect);
    group.add(rect1);
    group.add(line);
    group.add(text1);
    group.add(text2);
    group.add(text3);
    group.add(text4);
    group.add(text5);
}

ImageDrawManager.prototype.group_item_6 = function(group, config) {

    var text3 = new Kinetic.Text({
        x: 60,
        // y: 115,
        text: config.price.match(/\d*/),
        fontFamily: 'IMPACTR',
        fontSize: 80,
        padding: 0,
        fill: '#fff'
    });

    var text4 = new Kinetic.Text({
        x: 60 + text3.getWidth(),
        // y: 141,
        text: config.price.match(/\.\d*/)[0],
        fontFamily: 'IMPACTR',
        fontSize: 50,
        padding: 0,
        fill: '#fff'
    });

    var total_width = text3.getWidth() + text4.getWidth();
    var radii = Math.sqrt(Math.pow(total_width / 2, 2) + Math.pow(text3.getFontSize(), 2));

    text3.setY(radii);
    text4.setY(radii + 25);

    var text1 = new Kinetic.Text({
        x: 0,
        y: 0,
        text: String.fromCharCode("0xe601"),
        fontFamily: 'ICON',
        fontSize: radii * 2 + 40,
        padding: 0,
        fill: config.color1,
        align: 'center'
    });

    var text2 = new Kinetic.Text({
        x: 6,
        y: radii - 50,
        text: config.desc1,
        fontFamily: 'LTH',
        fontSize: 40,
        padding: 0,
        align: "center",
        width: radii * 2 + 40,
        fill: '#fff'
    });

    group.add(text1);
    group.add(text2);
    group.add(text3);
    group.add(text4);
}

ImageDrawManager.prototype.group_item_7 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(200, 0);
            context.lineTo(0, 200);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1,
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 0
        }
    });


    var textpath = new Kinetic.TextPath({
        fill: '#fff',
        fontSize: 55,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        data: 'M30,110 L110,30',
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 1
        }
    });

    group.add(shape);
    group.add(textpath);

}

ImageDrawManager.prototype.group_item_8 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 70);
            context.lineTo(0, 200);
            context.lineTo(200, 0);
            context.lineTo(70, 0);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1,
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 0
        }
    });


    var textpath = new Kinetic.TextPath({
        fill: '#fff',
        fontSize: 55,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        data: 'M30,110 L110,30',
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 1
        }
    });

    group.add(shape);
    group.add(textpath);
}

ImageDrawManager.prototype.group_item_9 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 120);
            context.lineTo(60, 160);
            context.lineTo(120, 120);
            context.lineTo(120, 0);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1,
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 0
        }
    });


    var text = new Kinetic.Text({
        y: 20,
        fill: '#fff',
        fontSize: 40,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        width: 120,
        align: "center"
    });

    var text1 = new Kinetic.Text({
        y: 65,
        fill: '#fff',
        fontSize: 50,
        fontFamily: 'IMPACTR',
        text: config.desc2,
        width: 120,
        align: "center"
    });

    group.add(shape);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_10 = function(group, config) {

    var shape = new Kinetic.Shape({
        x: 10,
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 120);
            context.lineTo(60, 160);
            context.lineTo(120, 120);
            context.lineTo(120, 0);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1,
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 0
        }
    });

    var shape1 = new Kinetic.Shape({
        x: 10,
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(120, 0);
            context.lineTo(120, 20);
            context.lineTo(130, 20);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: "#000",
        opacity: 0.36
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 20,
        fill: '#fff',
        fontSize: 40,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        width: 120,
        align: "center"
    });

    var text1 = new Kinetic.Text({
        x: 10,
        y: 65,
        fill: '#fff',
        fontSize: 50,
        fontFamily: 'IMPACTR',
        text: config.desc2,
        width: 120,
        align: "center"
    });

    var text2 = new Kinetic.Text({
        x: 120,
        y: 70,
        fill: '#fff',
        fontSize: 26,
        fontFamily: 'LTH',
        text: 'RMB',
        width: 120,
        align: "center"
    });

    var text3 = new Kinetic.Text({
        x: 215,
        y: 30,
        fill: '#fff',
        fontSize: 70,
        fontFamily: 'IMPACTR',
        text: config.price1,
        align: "center"
    });

    var rect = new Kinetic.Rect({
        y: 20,
        width: 250 + text3.getWidth(),
        height: 140,
        fill: config.color2
    });

    var text4 = new Kinetic.Text({
        x: 120,
        y: 120,
        fill: '#fff',
        fontSize: 30,
        fontFamily: 'LTH',
        text: '原价:',
        width: 120,
        align: "center"
    });

    var text5 = new Kinetic.Text({
        x: 220,
        y: 120,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 30,
        padding: 0,
        fill: '#fff'
    });

    var text6 = new Kinetic.Text({
        x: 240,
        y: 115,
        text: config.price2,
        fontFamily: 'LTH',
        fontSize: 40,
        padding: 0,
        fill: '#fff'
    });

    var line = new Kinetic.Line({
        points: [140, 135, text4.getWidth() + text5.getWidth() + text6.getWidth() + 110, 135],
        stroke: "#fff",
        strokeWidth: 4
    });

    group.add(rect);
    group.add(shape);
    group.add(shape1);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
    group.add(text4);
    group.add(text5);
    group.add(text6);
    group.add(line);
}

ImageDrawManager.prototype.group_item_11 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 30);
            context.lineTo(200, 0);
            context.lineTo(150, 180);
            context.lineTo(0, 140);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 140);
            context.lineTo(150, 180);
            context.lineTo(135, 230);
            context.lineTo(0, 280);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color2
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 20,
        fill: '#fff',
        fontSize: 130,
        fontFamily: 'IMPACTR',
        text: config.desc1,
        align: "center"
    });

    var text1 = new Kinetic.Text({
        x: 140,
        y: 20,
        fill: '#fff',
        fontSize: 50,
        fontFamily: 'LTH',
        text: '%',
        align: "center"
    });

    var text2 = new Kinetic.Text({
        x: 20,
        y: 160,
        fill: config.color1,
        fontSize: 65,
        fontFamily: 'IMPACTR',
        text: config.desc2,
        align: "center"
    });

    group.add(shape);
    group.add(text);
    group.add(text1);
    group.add(shape1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_12 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 30);
            context.lineTo(200, 0);
            context.lineTo(150, 180);
            context.lineTo(0, 140);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 140);
            context.lineTo(150, 180);
            context.lineTo(135, 230);
            context.lineTo(0, 280);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color2
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 20,
        fill: '#fff',
        fontSize: 130,
        fontFamily: 'IMPACTR',
        text: config.desc1,
        align: "center"
    });

    var text1 = new Kinetic.Text({
        x: 140,
        y: 20,
        fill: '#fff',
        fontSize: 50,
        fontFamily: 'LTH',
        text: '%',
        align: "center"
    });

    var text2 = new Kinetic.Text({
        x: 20,
        y: 160,
        fill: config.color1,
        fontSize: 65,
        fontFamily: 'IMPACTR',
        text: config.desc2,
        align: "center"
    });

    group.add(shape);
    group.add(text);
    group.add(text1);
    group.add(shape1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_13 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(340, 10);
            context.lineTo(330, 70);
            context.lineTo(27, 86);
            context.lineTo(30, 100);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(180, 90);
            context.lineTo(380, 73);
            context.lineTo(344, 155);
            context.lineTo(208, 140);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color2
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 15,
        fill: '#fff',
        fontSize: 60,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        width: 340,
        align: "center"
    });

    var text1 = new Kinetic.Text({
        x: 220,
        y: 90,
        fill: '#fff',
        fontSize: 48,
        fontFamily: 'FZCHJT',
        text: config.desc2,
        width: 140,
        align: "center"
    });

    group.add(shape);
    group.add(shape1);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_14 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(340, 10);
            context.lineTo(330, 70);
            context.lineTo(27, 86);
            context.lineTo(30, 100);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(180, 90);
            context.lineTo(380, 73);
            context.lineTo(344, 155);
            context.lineTo(208, 140);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color2
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 15,
        fill: '#fff',
        fontSize: 60,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        width: 340,
        align: "center"
    });

    var text1 = new Kinetic.Text({
        x: 220,
        y: 90,
        fill: '#fff',
        fontSize: 48,
        fontFamily: 'FZCHJT',
        text: config.desc2,
        width: 140,
        align: "center"
    });

    group.add(shape);
    group.add(shape1);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_15 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 30);
            context.lineTo(210, 0);
            context.lineTo(150, 96);
            context.lineTo(24, 81);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        x: 30,
        y: 3,
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 30);
            context.lineTo(210, 0);
            context.lineTo(130, 96);
            context.lineTo(24, 81);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color2
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 30,
        fill: '#fff',
        fontSize: 55,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        width: 160,
        align: "center"
    });


    group.add(shape1);
    group.add(shape);
    group.add(text);
}

ImageDrawManager.prototype.group_item_16 = function(group, config) {

    var text = new Kinetic.Text({
        y: 700,
        fill: '#000',
        fontSize: 80,
        fontFamily: 'FZZZHJT',
        text: config.desc1,
        width: 800,
        align: "center"
    });

    group.add(text);
}

ImageDrawManager.prototype.group_item_17 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 740);
            context.lineTo(800, 620);
            context.lineTo(800, 800);
            context.lineTo(0, 800);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        y: -20,
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 740);
            context.lineTo(800, 620);
            context.lineTo(800, 800);
            context.lineTo(0, 800);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color2
    });

    var textpath = new Kinetic.TextPath({
        x: 200,
        fill: '#fff',
        fontSize: 70,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        data: 'M0,760 L800,700',
        shadowColor: '#666',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 1
        }
    });

    group.add(shape1);
    group.add(shape);
    group.add(textpath);
}

ImageDrawManager.prototype.group_item_18 = function(group, config) {

    var text = new Kinetic.Text({
        fill: config.color1,
        fontSize: 70,
        fontFamily: 'FZCHJT',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        y: 80,
        fill: "#000",
        fontSize: 70,
        fontFamily: 'FZZZHJT',
        text: config.desc2
    });

    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_19 = function(group, config) {

    var text = new Kinetic.Text({
        y: 8,
        fill: "#fff",
        fontSize: 40,
        fontFamily: 'FZYY',
        text: config.desc1,
        width: 200,
        align: "center"
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 200,
        height: 60,
        fill: config.color1
    });

    group.add(rect);
    group.add(text);
}

ImageDrawManager.prototype.group_item_20 = function(group, config) {

    var text = new Kinetic.Text({
        x: 20,
        y: 90,
        fill: "#fff",
        fontSize: 70,
        fontFamily: 'HYYYT',
        text: config.desc1,
        align: "center"
    });

    var imageObj = new Image();
    imageObj.src = "data:image/png;base64,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"
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 319,
        height: 222
    });

    group.add(image);
    group.add(text);
}

ImageDrawManager.prototype.group_item_21 = function(group, config) {

    var text = new Kinetic.Text({
        fill: "#cbdd4b",
        fontSize: 80,
        fontFamily: 'HYYYT',
        text: config.desc1,
        align: "right",
        width: 500
    });

    var text1 = new Kinetic.Text({
        y: 90,
        fill: "#2e2e2e",
        fontSize: 80,
        fontFamily: 'HYYYT',
        text: config.desc2,
        align: "right",
        width: 500
    });


    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_22 = function(group, config) {

    var text3 = new Kinetic.Text({
        x: 50,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 40,
        padding: 0,
        fill: config.color1,
        align: 'left'
    });

    var text = new Kinetic.Text({
        fill: config.color1,
        fontSize: 80,
        fontFamily: 'FZYY',
        text: config.desc1,
        align: "center"
    });

    var text2 = new Kinetic.Text({
        fill: "#fff",
        fontSize: 70,
        fontFamily: 'FZYY',
        text: config.desc2,
        align: "center"
    });

    var radii = Math.sqrt(Math.pow((text.getWidth() + text3.getWidth()) / 2, 2) + Math.pow(text.getFontSize(), 2)) + 30;

    text.setWidth(radii * 2);
    text.setY(radii - 80);
    text2.setWidth(radii * 2);
    text2.setY(radii + ((radii - 70) / 2));
    text3.setY(radii - 50);

    var text1 = new Kinetic.Text({
        x: 0,
        y: 0,
        text: String.fromCharCode("0xe602"),
        fontFamily: 'ICON',
        fontSize: radii * 2,
        padding: 0,
        fill: config.color1,
        align: 'center'
    });

    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_23 = function(group, config) {

    var text = new Kinetic.Text({
        text: config.desc1.slice(0, 2),
        fontFamily: 'FZYY',
        fontSize: 60,
        padding: 0,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth(),
        text: config.desc1.slice(2, 4),
        fontFamily: 'FZYY',
        fontSize: 60,
        padding: 0,
        fill: '#3c3c3c'
    });

    var text2 = new Kinetic.Text({
        y: text.getHeight() + 20,
        text: config.desc2.slice(0, 2),
        fontFamily: 'FZYY',
        fontSize: 60,
        padding: 0,
        fill: '#3c3c3c'
    });

    var text3 = new Kinetic.Text({
        x: text2.getWidth(),
        y: text1.getHeight() + 20,
        text: config.desc2.slice(2, 4),
        fontFamily: 'FZYY',
        fontSize: 60,
        padding: 0,
        fill: config.color1
    });

    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_24 = function(group, config) {

    var shape = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 130);
            context.arc(150 / 2, 130, 150 / 2, Math.PI, 0, true);
            context.lineTo(150, 0);
            context.closePath();
            context.fillStrokeShape(this);
        },
        fill: config.color1
    });

    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            context.beginPath();
            context.moveTo(10, 0);
            context.lineTo(10, 150);
            context.arc(150 / 2, 130, 130 / 2, Math.PI, 0, true);
            context.lineTo(140, 0);
            context.fillStrokeShape(this);
        },
        stroke: '#fff',
        strokeWidth: 4
    });
    shape1.dash([10, 8]);

    var text3 = new Kinetic.Text({
        x: (150 - 70) / 2,
        y: 20,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 70,
        padding: 0,
        width: 70,
        fill: '#fff'
    });

    group.add(shape);
    group.add(shape1);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_25 = function(group, config) {

    var text = new Kinetic.Text({
        y:50,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        y:50+45,

        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        padding: 0,
        fill: config.color1
    });

    var total_width=text.getWidth()+text1.getWidth();
    text.setX((250-total_width)/2)
    text1.setX(text.getX()+text.getWidth())


    var text2 = new Kinetic.Text({
        x:30,
        y:140,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 50,
        width: 200,
        align: "center",
        fill: config.color2
    });


    // var radii = Math.sqrt(Math.pow((text.getWidth() + text1.getWidth()) / 2, 2) + Math.pow(text.height(), 2));

    // text.setX(radii - (text.getWidth() / 2));
    // text.setY(radii - text.height() + 30);
    // text1.setX(text.getX() + text.getWidth());
    // text1.setY(radii - text1.height() + 20);
    // text2.setWidth((radii + 10) * 2);
    // text2.setY(radii + 40);

    var circle = new Kinetic.Circle({
        x: 125,
        y: 125,
        radius: 111,
        stroke: '#fffcdb',
        strokeWidth: 4
    });

    var path = new Kinetic.Path({
        y:-60,
        data: 'm265.246,326.99701c-0.005,0.017 -0.03101,0.05899 -0.048,0.04401c-15.636,-14.39801 -62.269,1.50598 -51.175,-38.42801c13.729,0.479 27.772,11.05899 37.05301,20.35101c0,0 -13.17101,-17.94501 -36.40001,-22.18002c24.52301,-43.592 58.63699,15.89001 50.57001,40.21301zm-77.77701,-306.01301c0,0 -4.147,20.761 -21.41301,34.356c38.43001,25.058 42.29001,-38.889 25.451,-55.317c-0.01399,-0.013 -0.052,-0.036 -0.058,-0.016c-6.77,18.619 -52.32199,25.903 -26.438,53.816c11.05501,-6.373 18.75702,-21.18 22.45801,-32.839zm16.08101,334.016c-2.24701,-3.642 -5.68901,-6.58801 -9.534,-9.224c-14.09201,-9.64801 -34.37401,-25.11099 -12.151,-42.04001c-0.972,-0.93799 -2.033,-1.73801 -3.15901,-2.41998c-14.362,6.578 -30.133,10.51999 -46.739,11.203c-0.02299,0.034 -0.06,0.07397 -0.08299,0.108l-0.15001,-0.10303c-1.651,0.06601 -3.30299,0.12802 -4.96999,0.12802c-26.537,0 -51.159,-8.31302 -71.51799,-22.50201c-3.602,4.95599 -6.255,10.73599 -5.496,16.72299l-1.65,0.44803c0.647,15.92499 16.669,29.85599 16.669,29.85599c-7.57,-8.25699 -15.065,-19.879 -15.019,-30.55402c24.334,-7.60797 24.618,16.048 24.024,31.89001c-0.16,4.327 0.12,8.51801 1.558,12.181c0.01,0.01599 -0.021,0.03601 -0.03699,0.03299c-16.97701,-0.60599 -53.37,-26.85898 -27.217,-43.65198c0,0.00699 0.001,0.01498 0.001,0.02298c-0.192,-4.40198 0.637,-9.01498 2.744,-13.30298c0.8,-1.62802 1.786,-3.21802 2.852,-4.78101c-2.335,-1.681 -4.624,-3.427 -6.839,-5.26199c8.45,22.27399 -32.438,25.97098 -44.531,14.84097c-0.01,-0.00897 -0.028,-0.03699 -0.014,-0.043c11.77,-5.44199 15.638,-32.52298 30.867,-27.92999c-20.59201,-22.94299 -33.15801,-53.478 -33.15801,-87.00499c0,-71.26501 56.755,-129.034 126.764,-129.034c0.342,0 0.677,0.024 1.019,0.025c-19.597,-5.915 -10.277,-25.594 -3.263,-38.739c2.048,-3.839 3.632,-7.753 3.94201,-11.719c0.00299,-0.021 0.03499,-0.024 0.04799,-0.019c14.28601,7.843 34.183,44.397 9.875,51.012c6.933,0.642 13.71201,1.831 20.276,3.564c2.255,-1.495 4.407,-3.097 6.35201,-4.883l1.25,1.412c-1.629,1.498 -3.411,2.854 -5.252,4.15c17.82899,5.082 34.065,14.021 47.78999,25.895c0.13,-0.059 0.265,-0.099 0.39401,-0.161l0.73,1.152c0.12599,0.111 0.25299,0.223 0.379,0.33501c15.38699,-5.708 23.873,-26.46999 23.873,-26.46999c-5.625,10.3 -14.55501,21.603 -24.98199,24.982c-15.22301,-22.155 7.75699,-30.028 23.396,-34.507c4.271,-1.226 8.267,-2.854 11.379,-5.48c0.01399,-0.013 0.041,0.007 0.045,0.025c4.742,16.956 -8.45799,60.463 -32.174,42.805c6.53799,6.028 12.433,12.756 17.619,20.041c1.569,0.258 3.138,0.44801 4.70099,0.552l-0.12999,1.962c-1.02,-0.06699 -2.043,-0.227 -3.065,-0.35799c1.91,2.80099 3.70399,5.684 5.39499,8.64c-0.92999,-2.329 -1.726,-4.997 -2.34499,-8.075c22.36101,3.223 39.80901,-9.576 39.80901,-9.576c-11.16501,5.618 -27.04001,10.955 -39.65901,7.211c1.657,-39.673 39.36299,-11.016 57.80598,-19.336c0.02103,-0.012 0.03101,0.034 0.03101,0.05099c0.16,21.36401 -36.64999,57.537 -52.47499,35.61c8.92999,17.66901 14.00301,37.69101 14.00301,58.93001c0,41.24199 -19.028,77.93401 -48.60901,101.55598c3.334,0.27502 6.606,0.78302 9.757,1.61301l-0.50101,1.98901c-3.73999,-0.98401 -7.66299,-1.492 -11.66699,-1.681c-6.826,5.18698 -14.19301,9.668 -21.98401,13.38898c0.981,0.63303 1.923,1.31201 2.80901,2.04501l-1.465,1.211c9.265,6.82599 14.5,21.01501 16.77899,33.10901c0,0 -1.765,-23.573 -15.314,-34.31702c31.339,-12.65298 30.655,36.85001 20.272,52.461m2.989,-267.221c-3.33,0.801 -6.89101,1.022 -10.505,0.463c-3.362,-0.521 -6.789,-1.59299 -10.17,-3.044c3.33701,2.875 6.978,5.731 10.854,8.411c8.526,5.894 18.12199,10.906 27.83,13.389c-5.326,-7.036 -11.364,-13.478 -18.009,-19.219zm-1.515,-1.318c-10.981,-9.182 -23.554,-16.45399 -37.22501,-21.365c2.209,3.872 6.52701,9.202 12.30501,14.833l-0.011,-0.104c6.707,3.857 16.401,8.29301 24.931,6.636zm-72.186,-28.365c-1.75499,3.334 -4.192,6.421 -7.381,8.878c-2.62,2.021 -5.661,3.715 -8.932,5.121c4.208,-0.414 8.605,-1.055 13.042,-1.982c8.649,-1.805 17.367,-4.702 24.97501,-8.928c-7.028,-1.65 -14.27301,-2.719 -21.70401,-3.089zm-0.31599,-3.353c0.601,0.027 1.198,0.067 1.797,0.103c5.694,-14.588 -2.306,-33.664 -2.306,-33.664c3.12199,10.589 4.74001,23.977 0.509,33.561zm-91.417,224.04499c-0.364,-0.341 -0.714,-0.69901 -1.076,-1.04401c-4.817,7.759 -14.39,13.336 -22.212,16.55801c0,0 13.914,-3.16901 23.288,-15.51401zm133.54701,20.703c-7.46899,-2.57498 -16.59,-1.509 -23.379,-0.13699l0.045,-0.099c-6.82199,3.315 -12.39099,6.78799 -15.936,9.72299c13.84,-0.978 27.06,-4.245 39.27,-9.487zm2.168,-0.991c7.04201,-3.18799 13.73801,-7.017 20.01201,-11.43399c-8.22502,0.26099 -16.65802,1.814 -24.63402,4.13699c-4.707,1.371 -9.23599,2.995 -13.47299,4.73898c3.825,-0.31497 7.56999,-0.23999 11.07599,0.36401c2.48201,0.42599 4.83,1.18799 7.01901,2.194zm73.36,-114.87199c0,-27.77899 -8.871,-53.439 -23.86099,-74.245c-10.72101,-2.312 -21.34801,-7.68301 -30.688,-14.145c-15.30501,-10.58 -27.20399,-24.007 -30.45399,-31.045c-2.61301,-0.872 -5.25301,-1.679 -7.93901,-2.373c-8.196,4.901 -17.79799,8.175 -27.289,10.156c-19.17099,4.007 -37.953,2.845 -43.38799,-0.185l0.893,-1.668c3.197,1.782 11.386,2.854 21.607,2.484l-0.076,-0.06001c7.593,-2.266 17.9,-6.46899 22.124,-14.494c-1.465,-0.053 -2.92799,-0.114 -4.404,-0.114c-68.196,0 -123.476,56.275 -123.476,125.69c0,42.45401 20.695,79.96201 52.354,102.72c1.491,-1.871 3.125,-3.681 4.933,-5.379l2.482,0.513c-1.854,1.74002 -3.869,3.789 -5.766,6.06c19.793,13.73801 43.708,21.78101 69.472,21.78101c1.82201,0 3.631,-0.06 5.43401,-0.13998c6.088,-5.92801 21.67599,-14.77002 39.50699,-19.96301c9.078,-2.64301 18.755,-4.328 28.09201,-4.258c30.58299,-22.879 50.44299,-59.73901 50.44299,-101.33501z',
        fill:'#aacd06'
    });

    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(circle);
    group.add(path);
}

ImageDrawManager.prototype.group_item_26 = function(group, config) {

    var text = new Kinetic.Text({
        text: config.desc1.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: '#3e3e3e'
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth(),
        text: config.desc1.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: config.color1
    });

    var text2 = new Kinetic.Text({
        y: text.getHeight() + 20,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: '#3e3e3e'
    });

    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_27 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAADECAMAAABk+V6XAAAC/VBMVEUAAADm5uYjIyMhISHn5+dVVVXf39/////+/v44ODgfHx/+/v75+fn+/v57e3v9/f0jIyP8/PzS0tEZGRnW1taUlJRRUVH////9/f38/PzPz8/9/f339/fw8PDr6+vU1NSIiIisrKz9/f39/f39/f3S0tLFxcXV1dX+/v6goKB9fX36+vr+/v7+/v7o6Ojd3d3+/v7Pz89vb2/Ozs7Ozs7Pz8/6+vrU1NT+/v7BwcG1tbXNzc1WVlbJycnS0tLh4eH+/v7KysrDw8P9/f3S0tItLS3Ozs7k5OTAwMCenp6kpKSZmZnT09OVlZXPz8/6+vr+/v7Ly8vj4+OxsbHe3t45OTlubm6mpqaurq7j4+PGxsaZzwX+/v3///+YzgWXzAWVyQWTzACVzQCRxQT39/eXzgDc3Nzq6urw8PCNvgSQwwWJugPj4+P6+vuTxwSHtwOOwQTf39/Z2dmFtQP8/Pzy8vLs7Ox8qARrkQLT09PDw8OEsgPNzc3AwMCBrwPh4eFwmARulQK9vb75+fmLvAPW1td/rAN5pANzmwPKyspfgAO6urrm5ubR0NG3t7iCsAN1ngR7pgR+qgPo6OhojQJ2oAS0tLRSbwF3oQRcfAJJYgHFxcXD4mtliANZeQKxsbGe0RNMZwJFXQL7/fbl5eWurq5hgwNXdgFVcgFPawH09PTHx8ekpKWhoaFmigPu7u6b0AwzRQFjhQI7UAHV1NZCWQI3SwDPz8/IyMji8bje766rq6u+4GLs9tLH5Hi020o/VAHw+Nui0xv5/PArOgCnp6i43lL0+uSx2UOs1zek1CImMwL2++qq1zCn1Snm88La7aPS6ZHW65rO6IfL5oEfKwMvQALOzNXk4ero9MiNjoj29P7s6fKv2jzGw83K1LB8mSucnJy6y4uuvoQYIwCpsZOmtIBXYD6boYpDSi/D0J+4026Gj23T2MfT46a3wZx+g21wc2d0flZgZlGqy1BoeTpQYSExOxnj6Nje5cjG3ImRqFGaxyKrr6Caqms7w9ZnAAAAW3RSTlMADwcOCWAY8MFHGkoe+H0yKyhKIbyhVOnVt5GC+PHt4LixpI9k6s/NrKWWeW9Z5OKYhIF3aVpA18vJwbRtJfPl46I03dY71dOKdlca+Tv27+DSn59lOi7i3MTmwky6VgAAE71JREFUeNrs23lQlHUYB3AoUgoYoprUnMoRK8djxi6y+57+6ZqmmY4XSDZ2wVyKXTeKY7kSAxbWECWNUFApBVYRUVa5vEtJUpNEU9EMNdPMu3t6nue9990F1F14F/r+5fnPZ57v8/u976s+KonvoMCQG2549dV7b7nllocpd2IefPDJp3wGVPwCg8NeHfvKK2889/jjBp3OaMzKqk3Mz69LScmx24uLk5LMZvOLAwRlUHDAuNCR/rfdmpAQU5iXp9enGQxkAiSJMpLMSt3z/RvFLzBsVOiwoS99FB1d8f77scuQpDBvkT4tzRWJJT+v36L4Bo8PHfZ0UDjEFBcHJBVAsiwhJsYpSY69kiXJtBiW6fsfim/wqFD/J8LFdE2SLyfJjKmIAZRbHvXpJwkMGD6M13BNoudJsmQkZGJNio6OBZTH+gNKyPgJEwcjgZLkIyKhZUL7lUi4Q6d2N+UAJcmcad0dYeoPKIEBoUODwl3EFMftV5yTfZj29naD0Xjy5MmOjo7jP3I5jDlyuLOzIyI8zrtRfMOG+9N0uCaB/ACpiC38/Y9ff/2z6Zfmr7e0bi0trWYgWo0mKirq3bfj46e9N3XG9A/mpB+PCPdilMDxI1/uiiOCElfR+O2vuxqat2wtZbRaDUTLhsFERr711qRJYDJ5ynvJqR98nJ3RERHnpSgh44YN7gbD9M2eNbsa9m8t5SEYRQSSdyZPA5KZBbMz0v8wfWTyPpSQsf6mLjU2NG7ftXlbKQOt0EgplCRogiTx06ZAcwpmZ886+HtctJehBI7zD+qCY8OenZ/v38poojQa3qJbkklAMnkKLZPsjJKDhRXvS1BevHuQj5ozaBT0xRVH+Lo1Tc3rtTgZTE8jIaFl8kn6h7l/JcTGSlHuUC+KX8CEIa44FjbubNhWrbkUDYf9CmcOLpP0jFlz/9qXkBBboX6UkLFDXXms297QyvR8OJTNof3KN+fDmnn/wl13mdonJWB0kHOODaubtuB0MJeXSFlzplNzluYuPrIvrzAmQcUog8ZNdDEeOzevp7JcVpQ3E645NXMXHynULyqMWabS+oSEDnHmYWr8bn/1lXAobyZ8c0pyv1xypN2QtqhQlfUJGxnkzGNP0zZG7uHO5nwxd/GSznYdoKivPgHDnPWlsWmbVtwe7hoTvjnZ0JzceUvKOg1GnbNJudfXp+8S4O8EZN2O/Qx5uJsknjtzuDEp+6xTl+UU5fa+QlGC4PVjzeZq8nAjieNtjRZs7peffrag05jIoySoACVMAYKF2dqja/rl39bwOYddsLBNFqw8lpWfqJZJCR7tAIID0lwd5XYP8bYmudRzY1K2cu2x2hR1oAROCHIckK++a5UMiEeag1cTcUzw0Pls7YoT+Tk8ir7v6uM7drCiMZ+XKgbEQwuWPYfp0Pm0bMHa5Sfq7ALKory+QRk/1BFk9WZGAeKxBTs1lcYEDx3csCuWnykuLs7py/qEjFaAfK3RMJ4NkfDPfvyhU5I7D6qzcsXGM/BNo7KL+tzn5+PB+EFnehFEuWBpm8yEMUmnMcHqrNp41JJkBhSX9XnGgyhhE3sZRDkmk2lMCmbzB/FnaHKh3JxpTlLUx/MofsOD5CDf9gqIcpvMYJ90cMNSdVa1/GwzWwCli/o84AmUYIcRadwc6XEQ5Zhw7wjEDVsGJstbLu7NtAKKrD4eRxkrH5GvPmeiGM9HeTeBDUtjQtXh18nyjS2/WayEUtxbKIHDZCDhO9Z3c+x6ckzwJSw+/WVw1SGTtrPzrUXW3qtPwMsykdX7exWESKQHMVWHTh2pyc826/yi3qrPcBnINw1aDdPrQRI6iOnpj6rDrxNcsWhycW9ROaFQfepcodzvhjero2Ui29dHMX2QSPmGZU8dfp1wJm2ny8sBxUV94niUu64UJWSobK02wMNdnwRIaMOK1aF1IjVp+emorby+3HV93IMSMEQFIyIfEzp1OJMP4WIvNbm4t3xTvbQ+7kcZZZKIfNNHI6I0oQsbXmLxxsaZwI79vqWt7WzVJkDxXH3GSkfk29Y+GxEikZ86tE6kJgvQZGPbTz/vra9yQKklFLdMSqhUZAejYfo0HAnd60WTDM4Ez+IVYNLyU9vpqqoqD9VngkRkQ4Mb7iLuXid47EhN2IWCg7LJJp0Uu1CfK0PxGykRadwWxfR9lCY0J+yOXbykDE1oUFpO26psPazPDT0nGSm9r5ZqGBWESMQVi8cOa4Jn8bzFtFCEQamy2XpWn5t6ijJBukYi+7w0DutEbpKOJnC358tDG+XsIUTpvj6EcqkiTRqViIjVcTTJmLX0C1ooOCgcysXTNtuhrusTdwkow0WR8M/VsEacmExmTaazJvgMyJVnJYfShu051GV9ons8KaNEkYXNahKRrhOJCd7tsTy0ZUWUtpajChQ7j6K/JJQAk1pFpCZvx7MmeI+dQ4cxNygSlBZE6aY+0T2oT8gQ9YrI5gT3Cd3ZZhZAecRBEVHgjv/92b02ZX0ubaf4TlSziKMJ3WNxyfKDAkePiEKj8v1RQLG5qE9hT+ozUtysDSoUkXUHTWihYHm4QYH28Ci8yvKjv8GRfNn1GSWevqo6a7ozoUHh2sOjiCrLL5zZa6tS1EeJ8j6gPCxHCRkskOxQqYiDCS1ZKk8BayKgCCor165dtWotjorygdD5pLwgIfEXRNao5c7q2gRRyMRhUD5cWlLDjQqpAAu4rFix4PyJQ5vq62X1UaCY4qILE1+7WhAZJ4isU8dzTQ9M+PLMwI3Co9CiJRVkIRealwvnfztWVT5/vqI+dHmriDNFxCXUWcvrr+dFAgcLh802NYvITIRBweMYUGYjCp4+JawKsYALwJBM2YXzJ45VzQcSNOEmxaBv37cvNuF3Q4oF399ab+ZJRqt+tYomwkLB8tCgYHsEFBoVUmFZvgQYoiGcT+edP3Pi2LF/iixUn7qUuo6OU4f/OniwvpxGKPMR/toqLhJ1zwiZOB8UFmUOjQqpIAu5zAUZPmQ0b25uSclBSjoSZmRkz/mnCECKiixjOJKJwpvn9epdrS5MaKOIKDQqpAIsMC0lNQADNELwZzU1NSUlS5fOmgUa6dmfzJ7zcUGntQhj5kjGC0Oizjua84UiDgqHIhsVbBDrAjCQEjZLMfBL8BsZyMF6fDBzJpJYrVbzCBLxe5oXWa3+2ihNaFBkKKRCLOBCMGLIAjWQgzwAZHpq6hGLFZPEkoz3ltNGauIahVMBFpgWcEEZebJJAzhgPsBjeuqM5GQksVgsQCLbJDu9ozbyjeKAwo5K6nRgwWkBFxgYoBEzGzBQg+NAj6nvvXck04IpJpIw4QOFN+xW54PCo4gqLAu5QD6WpAAxkAPHY0by1KkAMmXKYSTJzKwcIbuTfOdNQ8KbCO0hFBwVVgVZyAVgMB/wgR8jRipyJAMHekybNvlUJsU+gi6u/JBs9aohIRRhUhQqwILTkkww8swADNQgDvCA4Yp/55QZQMxm+xjJ003Edi8bEnFSZCioQg1CFnShJPOZSiEN5CCP+Hfe+dtipuTcIz4CR4Tv95rjRmYiRxFUiAXGhWRkIQvSQA70gL/zNyuSlPII9CaII9kTyXhnIhUqUhaSQRsOAgIWpIEc5PHuu++eO2BOwtivFV+mRTR5Y28cJoVQSIVYyIVk5IkXNchj0qSowwdIpDLzRuGNa8TCVq9brlIUmQqx8C5CyIEiaCAH5q1Jp4AE/u9GymtXwWWe7w3j5VGqiC7KkAYb+POav9GjuLIyEc7gkCDVv3C9HBRiEWDkIQyBg6I5d6CystJut9c+Inm+2eyV541SxcEFZJQhDCHwx7U/7rZDcnJynoXv4vwq8b57Wvcq3SeSoi0tzkGPnMTXrxa367rq/kKCKkK65yCSc7sRJCXFOEZyUVvdj0RElu7DUI7vTsHUJV4LJEO98b2Am1wYLtotnEgW9sZniJc+BV+RDCOPFoakrq4uP193jw+EewxW/7cKT4WGBDggiS/Sd60h/5Noj9eiR2KiYYTP/yQkcq42kVJrvPZ/EhKp7sgikNo0GBIi8a4POO6P5hdjbW1tVlaWUXetnGTXACXRtgIHRU9D0u/vJT1Ihy7LiNEZn+VI/L3tO5+7a2Mwsikc4/CvKCIamYEYzdc6HQwIRP/mdTzJcO/8rOWeaNefNOgohrxrUEP+Pbh54DUHzt928jAYEkb4CAk2DYSHHOfR/NluYJN3x40iid/L/LvXAVcczS+8SFoM1cZxvy5sHWDNAZE0LrFjJCD94zvOZYk0t+uRQ69Pi33oahlJSNCAPIb/K+9cepMKojg+LUVtVVqtxapUg298tNr4rE18V60xRo0mpnNMZuIEF7JDv0C37tyyIMFVN7KFFAiQ8GgolNKFRv0K7nXlLY/75lEKlsv89m3SX//nzNzhcoam3n96X+LjiSEkotiscbXmCEa+vf9SxPm+H6k4Z6D3O1tXNZ+cn0o4P0wjFdL7Je40L07o4mfByOd1nAuTSMtRzmLCqOens+TD6XSNIB0G3Vx1E8b+/vzoLPHRNdKL9DiAOVp0qPf3j48V3FWMoJ2Yn70Jzf4RjXzFGiPamPi6vMMyEnH++FrmXQ0jaHC3WDrd9NGwBvYmvLDwrswHEI3ocQwb8gXpDUJiwR8fyrxbwGdqGUE9t4zzFaVmYTQRFYyUmZ+X9iP1Oqw70Z1OqDcv3HZWAY+ZGx/SAfFfXeiEkUjI/VYEJvpRXXpGRSeZdNc5Id68yyUKmYepYSRRf9XBEO2IAUitgwpdBFzzZd5iGDGhhjiPpZx0U+0wshQEcInA2HQTgzsh3omTKZqD+MNxwALuIhhO3kdNzcpyd8A4tRbVTAgAi4BYNA1yWvajBWZ8J5SmA0ohE1a0MXp2yH46GDP48w4j2RWsNOIYRmjDTkD6BdGUkYuHkaVVnyoiZtQEPQewCLjX3hg1KJQsFeIAWNFFhlFzXAD5XNO0IYNCyXI+oxLyzIqa5hDIpPjW/IZbjildXvWphByeNKFNcGm3PCihCDVS9TDCIkGsEoIdQ2hzXLkFisHRWcNUDyPexe+gEgLX+9Gm2fUa5EGJF2JGkMIozRaiSiEY4J65F7WAvoMuRVCSYW+nS6HEnwiKLURaeC0m1CL2joKBpDDClteioBFy0zKAWsfj26qSTBaWSEc2WkZobDHn0xEyOYBay+yoSkpmNU07LSqMEm9iJaP1ARNCQlpOz0ObejULJPwdFJWSj6TkQxIyMz2A2sKdfRjU158WlllHRIURWvKhFYKvm02obVx+AGopOOeJbXEBMUpYdjGY0fMBY45+1FZ6H41r6zQeXFzaKiuMCvFIFYr9FLBGyBHLEGo7j8/eBcA6Vtq9gdPX4U97gqVy0fqw2a0m9F/YdnFc7x+SXGu7FK2OlSiu4gPuyQLSfkyPHujFNLPmJXNtRLJB3sRS4WAURB1qITcd/Sb0f+mdveHSkRL1tOsGLskG86YXV79nquuAw3bzANoKnrwY1+nwufbc08bWZdC5pZRnNZfBog49H1OCjy3DNLvPpXnU9OX9tKUqBBdkzpuNePKBqA9UNrT5GEZbzKtHD7D6RCKUJpv1wOi6CUqZN7ac8BSC35M+KIGr6sBHRqwDqBPoffLwAVZK8XkaLB5GCKHrEBFBw5w/trT8K+FZWw18j8YxqGTox+O65b4JdQ6CFcWyDLA6xxoxkvZ4PIlIJJLwFCnk86uBYC4UzcRBBq4BCNhmHNYtLxctJmlX2/jtQiQPNcB1gKKOew7zUC/qTEwPn8ql5BpwwgKAmwKgVCwjnatDPGbakBPmTUKTNsbu2S39ndFL6zA7LndS7w1R+gvDRl0I2Thlt1iHOzsciqA8l4ICK3ViQsKwERfusRn7GfPLAePYKHPcBo2+cM5yUEOExMLhq1OOSasBZZS5s13an9Tcs9Gsr6wEdLGNT5yyjzwyW18Z1kWFwVHA4jjQRuoGwO1228YEJmaenZza9+KMxTLb//LVQCftvTbHrlsYNzIaJlRSAi7rkMDw8MA2U6/R81CNK5XagaSXVf+KIS4rmUEccL6BmNBgpW4siAeO1v3mF10uN1ewDSEe2FWZIAQpWqW5rlRCYkd8cFa6qatOSMCK+GDb9trrMA1UQnK9WxcZDadrzsshCagoMSNeOF6rmTB/tGLkavfsx+ox6K4xtY7kK0Y4ConUTMJEaySF+eskCPXcrTrIj/lDFSPufsQPfRol2i0JhhHEEdULh3jE1Wa8Aw/W28eeau2VpHw89laBnVVGftClpFg2DsQVx/TvC6HekGhkwhBH7K1jVHfIP/UHAPO42ggM6o4PYpIRDJOILw5hqbvqG7FztEkTZ1uo7wuhciPPOGsk0nS2ANU3cpOPozR5SLR1Q2I5ychhzlqr0Em0J/QkG5KMzPNykiayZztWP+CQSEYy8pavXati5FamHBJGw5hrI8exKiTUvwJcG9mj/qyPpEMyIzb+jPRdU15tzqjHB5jjtaY8WUq6sKs4VEYycuQ+4o5z0mycLJ2jdDEpKxqY4urMSDNWykOYKiLg4OcTCokd4t8fZGQunJEbmeft2bfIIJZWG5LKKSIywWFjlT/uxZdjK8p3yO0cthH5DFBfOBxXGLFZODse0SiJR5UROcnh2qt+BAYsj8gZHlca9VRURUT47KtlevZrhIxZOI7IOmdVQsDO24mihr4dyrbK3fGZDtsOAIhDVKY5r5kyfQ+fQpFxC2+fS1TnseXF1JRjujt2q/8AsNTtLIZan8QAAAAASUVORK5CYII='
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 274,
        height: 196
    });

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        width: 274,
        align: "center",
        fill: '#fff'
    });

    group.add(image);
    group.add(text);
}

ImageDrawManager.prototype.group_item_28 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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'
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 280,
        height: 77
    });

    var text = new Kinetic.Text({
        y: 10,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 50,
        padding: 0,
        width: 280,
        align: "center",
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: 280,
        y: 45,
        text: config.desc2.slice(0, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: 280 + text1.getWidth() + 30,
        y: 45,
        text: config.desc2.slice(4, 8),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 15,
        width: 800,
        height: 110,
        fill: "#6eb92b",
        opacity: .49
    });

    group.add(rect);
    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_29 = function(group, config) {

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAAD5CAMAAAAtFhFpAAAArlBMVEUAAAD3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/yf3/ydbe/MLAAAAOXRSTlMABfkK9RcP8BwhE+0yKuXcOOnTauBWlr20oXVwRJGDpiareknPTZyw14y5wWViPMVRLlpAyYfMf16/g7dsAAArqUlEQVR42uRb55qqSBDtJmeQrKIImAgqZuv9X2ynQQXjhuu3d2b3/BhH7QHqcCrSg347aE5QDUksegpC633JFWa+NEIvcgfD/mKyVFSBw+h/CFoSjdIaTv0530ts8Fk0hF1k29F+BRdQ2tifDi3HGEn/I44kdXvah96cgQqeMgVwpY0OkBqWDfdg9Dw6JsqIRf95SOqk113ZDDTgy4mm6RtxBszQMeE5NDMPe+VaQv9diEG/u+tQcIepaE222ykPQFHwBlTnEPYC8b/oZZIqWTnRTAuriCcvuoEQYmfwV8DYXuqM/lsE4ZHlbhwN7uAp+0osvW0aTgca/DVQ8m7giDT6j4DdpuN8ERwe7QzUipKobzKr09CcmxXmuq51eOY9QWkgoJ8PWl3MZMYVRz48osdOD37XLdRkY3CculYrrI3lZGPFadfPxzZPvSLIt9Y/3MO4IB1TQA3vwwrFyGY23W9p8Y2LYFpQJovY9cedi5BkHloY74MfnMTYTbfyHF+ipy1meN1z+6XxV5MPFoxJ3/XmREXzrt+5SfTh5oc6mLTI5DrPbFCfuuacbGAtR9zfFqFoLAaZLWe9vn8TkWS/GKGfBixiR4YapiiatSVm2Av+ebahxaA3860gHt8mefP4w/hRBjEbwhkzuiAl8W66UH65GxAmVkArA70dw/TO2BLRj4F41OalxV9rYdYHs1usuc8EegEjOnDNi3/ZsbroUN7ih7RhnBOupo514K/aEY/pVvrwSQzLnYWD7NANHYQsBuSo/AkF4tLV+LA/jI8m1Jj3OZZDHweWBIEbBfu5t0bqjojINdA3hxCPKQDe7LOjvAoKu+Pyz6nBmKYluk7fBH9j5mXxtoHYqDqXGX/r9E6XWRUOdhOMUJBTTG6p+O0fCCMlcKzjIOo6FYlJlmee57snYierChz9J0Sx/mGEOPecvrJv7F7quZOkumtOWm6cYV98E1yNZEkb2djUOzIDwFi1FCioIM8UJA3mXndfbNn34snWiB5SUKPjquhbgtusriXauOvroYrwy7Wlm5uabhj8NS/Hta3XUi+kxXFdP/oL7p14EgHhXlMh7jYc+n4YDeSbHih+4VMYI7R267UT0YaOTAHY0X6LCBoz+YlqQw0m5ZC0cNQXZmOENq3+i+9+v+ic5NDCm/KVGJNWApM7CWfFzl4GCFlccxlTVyMLNTMPURwRIhdo0uHN+KUq1AwaaBb6XmBjGxp0BgZ+3k9OBjFLqLTBjMuyFAhVgU361HOUTqn6CN5+I2J1rbKILeNpbuFjVXS/Ls4rNVKyZs7iQEL0d5ptKCHTquz9knuxbKaBbSCs9HRwr2sME2BXS+2SfKhwKdU+SIBplkXL2O06hL91sFUk/KQG9RlgpsmaxcjouUMFfRNwzg4azOOXiWoDwHRVjI7M17LU2hiVYtYrAPNizEKu2DmEoUP3oqnbTyw3HRYSprFYCEhig52t76Jn5xBjHVYBQqiYUxS1Kr+HfKSi5VVMFODHOMzRldtMKd8ijlV26umeGZLFYgagby8uGp2nY7mhjquMxX+9i7jEVaSTJLlR/1DJc0Q/6hMHPtUZGo4OBLb1LSZjYrcZbuo99qHgU4okiddfvyz4+RpJSwXhuHOJ3klNiOZcLOwBlYezqSWiUiM8kCC0V9EADgHNDQBmwzkvz8pNuqRF7rFSt8HWLmE9/QaVM97Mm4iTPHxrDA/MYBueECp10KxkOvdKmt7MTLtKwhGHuCmAbJ3NUxaUHVR9Ge5RACvXBjBVJOQAuVRWOiqsTeLCTpx4X6zdY+tTTQCM1ug3Q7L0a6raCw+ZtupFB1iQMN6TLE5EYxPBGJNTyAPMFYRTCpj4HLfTnj6vbabdr5UOffz68oiW9tdSIyLqPGGE6OEq4WZf5D0W48KwNVrNl+h3Qim6/LX+O9H3TnXaEdL8AKHgRJf1SsqeLZtkRZ70xQxQKa4/ms/luVKrznHTEqNEA5hVJbS77VwbDlpAJ3I4xiuEBy0fWjXpBP0+nJohDsweKtT6QcS8EDDd04aIy6v+qRewCIlbRUlIiZKxdW8VcTXbOsBKrUWQVK+BDjCTpmQ6vSGudiFD8KCCHG3uo68xa7zLPqHfBGxpTa5yxScLCrlO1qoNfQH1AMAfEQ6M/mF80CgAefP1dnLQd0eu5nORTova2qXnE41tdQDf8AA0IyZzxos+iZpsj1yAFjzkiQHfKpx/T2bHfbm5ht5d/mjyMzVNrMWYMrOToQMcFLYcHHY5Vae4Pk1WBds1e638uLP9bOESntQVwCG1ATyJsNs9f0umR8yQdTIGVo9NC9dr7pvc+x1DDdxryDEd/KL+k0nJ0uml1V0MASjPJ5qhOrJs79zg7YXTLP31w5n6M1L5uGhCHmidY1afIexwiO15zrOLc+aNrIku/2W0ycm36AUEv0pmE4MUjNmeuWw1iRabRaJyf3FCqlrdsXZC4o4cxMCIKKo6blRytPic4WDVouffVk/brfz1XcmqNG8WpERJJWR9LT+cxpVN+b4U/ubZOKNkEToRdsfDUrwOOjqh8TKdNm07/y/T0yYnFG99vq/7amuwWQ+21DnAatQFOR+UI/yP9dqpIslQIVHH9wlF1uuBU0g16vlXQ7PVkDO91YHo8gAD+kY84zWbMqQoPIWnX9q6hR2PMBKRo3kiax3AU9FLsNNGPf1/kZ7TtR6lBixqw/BJ/CXX0q5LshkDxBD6lxU+Krpjs0rkkYCQMpy8s5p1r+qRizfLPruXbGJfyUml2zrVJJGhxLihweLPTY+CPgJWMWKZ2JuRx5+4+Zxo+G7sJe2v9HScV4nDiTwDfQ6B+YIcISUJPFTQyI2v9IheNbDpf7Bh5pxZxY+/4VputCenDIbrm5VDBs7Qnw18aKWfdQDiz4lnvWrI4W5ps4lyFLT0KNnCTYxiVse327QwK6jGNplMNlbhTCbJ1liLLEe/3RmU8ZXF10PElCdWc+mQvaGnUY+5fDjKZGBW7OUi+hDYqAnIbNvEZcAOGZJRCpK4wytx4rCn4leZWjAmKsL97KBrHbnDMwz/9aKbuywcxItk/fqpqFB4PLkTZ2w0MA2EhAigf+tc59hD6bNbdmi1iC67g+VPdWPNgzXoCu3PF3M7qLZ4MQxxLwNhGr2FNNpaaTTu5BvB2T3bRcnYuyi1tqr0aqfHatF29s4JIyEDGI/uMhfp53Z3m+jYYLhqnbH7mYIIN7ncF9vkkALIp0c5ENhHCYnx4q03BW6u19fHh5NtuemnHv90g3LuFlsWP+WHuzh7ddrDfhl4ZCfrncpC3bfU2w3Cp64Nbcy36BNIrkfNRzek8QC8K6BEJxb1EVpHYJevVJMskdQ4aDXXcJLkaMNzUHoUv9s/KYQXI00KQFMQu+TaJAbCjfqNo8fcn2H/2YhMXL7Bck66TIkU0XzV923Jwi73dIuuNbNDCQ+oW43I2u1OeDvT2m/1WX9NvyA7vTnUHnOpab0Mm5OpCY9YqR+IyOH12pMbiwekHD0/kaJIe2iSM5aP5rDJ4MBUo+KChzfgZ+Vodudjh0HCPu1qGlb5Qz6U6D3zQrdYtXztuTx7H4jIzOUqFreS2pEB3lnH2dmYrvoYKE6RVruSQ9L/LSiKqUHBeWYowx202Ul8clUtwW0ELA0YsvSEHzQWDMevbomc/nJcXsgXQ+66uolGBI1qGON6HiY93rhr3KVSLGSX33nbXGXRdDCMKxwH08iLSTiZPdGUZz2Qzu6ZlgSkKVUNSe5qMTxadDXqVVwLCxWjX4NhXhMg+zjkcs/kc6plA+we5mGjfjsWZgLqMYSYPNxb5ZJsY6LxGTTNiQKNkDR89o8AjNcfPYwCO5cvC5rEM363TwTclo3Ry1/JhjmkCfeZoPMYwgSJZLImKRZ5GjEz5XFrN9O+Wy6LFP8w7U/W0pv9ycqkP13ZzL052Ym9790PNYv+NqVAu/sPCiw6rgkv0PF7yi/K5nZrjVa2JRG5AhqtiBzUqowxgfIL4c7OoHt75zISPtQ/mLuyLUVhIJqwCbKrgCAKLuC+tSv//2NzQDHEGKdnRPE+zMN0HxtjrbduRUX4RU+lRqf+hLs7n/6QvUumXZ1jOKfpMnq8wRP4ttM2aaXCJLakcrSkev6SxZ5NdLOa+ZStW/1IaqeRzpyIqlZPMLSif7Paldc2GfwVDnfuBVeDaefsjqYr9j5HMrS8OO+huqgsvwqKvjC4VM1COwv86/RJmLvwz24c5u4DG/5zghCH0waDVygWS+zkWJ6CR+LFWEso0MbLEJSFRW7cDewBNqNLIApR4x7zuOEcNOxs1gND+K9yYjuYYw5mTiVCwQrxmnhdo7lUwx7yoDRsRzfBGsCgONmR+eo1/Wo9/K/uZkzxqZzmC0Rc2HTwF/OfGJsV61SXmnlKmTy80L2xFiymx99em5zWUlzMGpO9jTsNbOr42bwYA6XFHIs+HcqbzEgtCvTYEkGpiPK/ddwCBL8/GcXhpc2pnYS6YtyNqMRu0bRHnRLyQ9gZFZPXI3myMExJLQqQY5cFtLdYaxZrwMwunJD15EzCLZE6QaZYq5ezxgmVqVwwR5cnaLFxi+ZScv9c/rY26hiDOklmTG/ntAMY/H3RqaLSPJ0dOkye/u6GzaxyOlIjsd7d8aB8SOvcZXcP/jOAEBhrJFfHR9lI+FQi+JOWWoKDU7JQ3Lh0s5l7KgsIlFkl9yB6FPsmvR/0fsQwZpKgeAJwiRJ5tlVSLqK17m54nDdCjRwB3bVE8B6ox/xNhoVCR75ZbJJwe28xmqlYsjJR6IzVNzwUXubyfrdBMxtufdgJ4F045V6+LDzcPsFhxipN29MRwJuhLsbmk5r4nReLKHkKbRcseaejP29mtutjHDwKjY0IvBdwh8YLBPbT4VtlyzA3HXmDdd2zXPZq7Hp7fIwPC6wefQpb2o0A9Jp4jEitN0FpPJr5QMgPzAubD1Perci4wDMKyP0QvBFQHcxlWgJvIRr6bYA9xLMXjdnubC9LRzUi5kY66khF8D7Ud1262ay9T9zSsz2SDRbsmJnY9artPFpY2DVGt2TRLdPnybtZuOwcNJljGOaOJz7XwQcAPYYwHXgtnbklXDSIiCTNCBFC+aivTnnSHHlWs+Md4vbRzKc2hx0EH4HkkFHHmCRJNvbW1Ytyeq4UWkAbudW7Pj/JilHKNO1VOkcWeCnqM0lGKoNP4VzLuWRstNfoNI/pXD/dS5CxiOShtdf3xBzW8GZ4JDbXQXd6GCwtb6/bkQg+hnqQ6/yFIsFsRgB0avZSSZ/25wyx1hSJEMoHlDY2tSY2Y8sQwAfh6/nsEzMd7SxAw/PJrBA6tzJMAaWDBfWpRm2lgqYCwScBc7HOXMIFXq2xD8Wgy1IpRH0ISgNqpXasQ0vgaLzwMahzNBnGqxnOAj652XzOA4K8BCUj/AlazFhpP2yl+i+0Uq8PznWjyD25ZpJMBdaVIwgIsUEKNLQpLRIPHDmbgk7ImnjUHdZBBai7eToX8GsanLnKbrTkOFBZXKdyRVss0735iB6Ja45nQFABkKygZt173BZarez+mAWLUfNl6szQoFejtlLBOQRVIZcNraUHTnfMfhgLJDXPdUqMxIc9RzOb49TnQVVA2tsei1ht8Tb999ZMWvjkQNef9OtldeCLQGdoSSpASrlKsLqGQNNHxd4R6Svg9jCZsiRbqO9K6sB7dHbi2Ax5CCqFxyE5yQXsNN1dROF5J5EkGdODpbRSLjUSyzNPqfwah3pAKFKkORpp0fhVJyxhoOfNTNrZTGLrGy6gzjOWNkRZSU5Mi1ZVo57jNQhRd0SLxNz8ZHzH1wQsavdkOzwwSa1rFDyepLwC/sU2kz5eYLTg/C3Xct9quxOq5vcZ8db2VjykmI4WvWQ2qx5d/DjqDr/nPkp1TbxfS74p8z1fhA9+OXHrL5iN5U6YJ+LHb7osL9KuUVZEw2Em4Wr5AY07IVk3asP/v5rTm5l0pZb1BbfFPCKUbXgzkFF6v4s74Qi1ith+0XTEjT3hqAl8YHzbJXl8QHARTSZV8NdXnb6eae1R1bfR0PLl/7RSTXoknrg/35DAwWM2YmIgX5vVso4L8iuvrzMuRAH8hd6cBdGemsDXvd1X3E9FW8SaiQV9jLWBOavg91CIUY7/235CqWkbFiVNaf2m+n1mg9Z6MB6LHzQviRyy2b/YdQ5oZ+sfI3EtOYjtR2bT6EbVmQ2UnqaXuk2UvmeOmSkp93U64RlEiPPNffZfHkCMLjL0+fbAEAl85hlVJHC0h60DEkQWavlFolA3AD81E0YOwgctlrn5l0HvYtzKlx5mzJ3Az/2RQCVAC3Y1QIIIJXMVnUHaj7LXz9kWCo7FoU3RXwv/9jXq9kI1kRjtYWuZWQASRI5264UOVFdAHkHlHdFyMFP4uwcQsk1OWiReVNhK1f1evjzQ+k1QRrTgD5NMlKzTctIvdloQo3bZ+tXZrA52J75aGzle2FTYSkloeeD56bAHoh7e1JLaeJZOOdV06xzd5OCbv1/LFa10vMBRxguVRmJjgHUyrWcmFue6FIKjkH8yEmyJZHDJBTb7d1KrTR/0Vkpq8RH6ggra6ZAinJFyb07MAaYNKhMhScrvSsG636XXxPvTqsLiJmy2CRV466nOlKRBJZdLV3X5zLCO6s1Z5teWw39aXZ37LTo70VSrcynB6JHLA89Px9fvmT4IgXC2D+m2g2UmyYG9HaR5PUjpyQMM6KRWo0pSC4oWRbJqAjry79jrCuiuW2/FXq7L9ttJa4V+9frisUBlJ2I9oUB2vAq/QI1V/jB3nduN4lAYIToYMAZMszFuuOEaF97/xXbkJprYOMMuuT/mnDkhtiKk27/ven0ifL+OKeXZGeiB1weNUUAKx7YvUqM5jTtWwDjFj1ZpYn/F1+LIWhNpNiDisJm+V7OpV7rAJcYtUf+X0k3lCcLmfx2KQZa6pypxZNOKmkvUvVfshqcWc6HiJuoSMeruTfwG0FHdZ6NSmwrkVNtSHp3R1lIfN7EUNXFSjegNxTCV46TFoSHc9ky2n3/eGlf/2+7zTw6yqcIxteeRsRqmaSy8tcriCQgQCh9xOpNwZCHcuG2WFwQrNInHJv7XSOZNHTTVMzE77YEek64EMMiGX4qKKDlWPbFgCkKVWOgdQthenphT6u1nye0i5y92h2yP3HS+o9Ovmb7KklHuGcawZ3methpTwCzm+zYN+MTWaNIUZAwVrJdRHzuDBf4UWlaZLEFf0h/mbbIwGSyI53Y9brE/gDv0Ypl4bNy99CGBVSxm+7qw0D2s+8VCy01ErkqFtzaTWsH5QgaNDj8IgPVLsV395HwZKk/TjyHd9LH65SCkFrE/YLht0YCPkpAYAJth8tFb2xpFukUoHpST1RsPB9FqbVZ2IwtHV0trQimqBcEtqwyxYPYhNxHOVthS1pCx9xFiA3sTlFOb4OD1ZeICGkYvfJ6dqIlkPleEW6O0O5y/m9ojzjZ5XksqEtUGQ1zA9dCeAQeHXr8GPGCJf0ERbEt5HOzKphEK4AgLbGdkRK/mHoUWk1qTwZQn11l/mFPaq8XdOVzegIQTB3JJrRqn/Ot8avHYjDaR+d3sPgB/szuoFmGq3TjJcyuId0Tvbyz0/kujVMF/Dcb6j3YHJ4+/JrMCt4KCcWRVhd5Wk1o1OaWVr+Tg0SgBJSd/oXeAx/eDMnUzXWMKWi30OsS3ps2PYoE+w+niAV7fkZNR3B09EQuJ6khtjJKjcU1ME8ED14JLCm6PhxfBD/wdjpQeuRC9q8t522KnVichvzUzxmP4i8k74/RX/g4WEVE3E0R2/BY1MdheifYzNWycncjvzk/PzkosLaCmvJBqdpuFXtaaL8h54rEO6xr6p9uPSab5s1SiqTPomgW0eKUUr5YlLu/cjCSMI/oc5Nvpo2tayFOBjk9GL6guWkBbwk1sIngATWjP/x1BGOvFPN/68EG8v6MvV50rlhf4mkR1G4AgXOhVaSJ44FgcIbU3U/OEG0g+R8+zYy9/FMUkIi6gG2/EVn3iHTlPvKyIZIJoN3/bLuWZkIo+UJgAglyh90pewKIlRC+usxIvu1MdyQBOYEHBs6Pn8OcLqE+PtCVA8ftkmtf5RPp+VEAPqJ9IbaHXPbZowKXJkmjAeUJ5noi4p4c/MQXLKZmmrtVCb10kY7pH8UPYNO9/XGmuo26ONi36xPCPJq6LZKSPiT66t09NwRc5PbIMWuzUEo6hRm6U2tQ0SjUTSADRCslZtRZCqW83ShHeGlC2IiQUfT90lWGNKWAMu9VC78wmo//6+TorEPFLlCJ1NbQUbMiL7s5K+G56ZGnULKCxntnmYVxCMamFCSInKtK8RnjdH/I7FJivtpDvvJx8euQ3oRekYEhmxFif8/aT/fMwnVolpta0++X6sw7MDVFBsgTf4FaoudO7c5uaWLzVZvfzAbCYhBpKSmAKhjD7l3QdBbf1McRxoqXsxIK4gLintKqJyXXWcnZ/tpIL3eWHr7yCOGHcEF2LE8flBacG0btvMU8s7O267H4ppyS96Gk3+XABy25UjNAXSu2gDzK3gtxOUgvbz1itiWQqckqT5/OaksfRY5lLmFcyiyonzCMjk+hreLBwGyKcM2+NpguKsBrGNaRLBP3H3O7QfoHFjQzx4AKyT4wW0KJzcwjEHp9z0Z14Jz89/4jkE4/WeA+yLOtYuhMcRzBPiAeoNAWJq5GTWu2gF3Aopa2meZfCuVrW2FGZRU2d9SaXx+0IT/VShCywIV0D2SSbAsZos+UGcKNBlf2k1dVVF/e9LayjuSsBE0QpQK5S91kg9Urwzktl59WuRhO3CHo5eK5DTA7436QetTIjvqKj78ZxIoaYUSCHBokrT6JP8ImT9soL0miyvDDk5sdZ/dLggMbXBwNaVWeAhmV1Qk2LFKqoduhz5VEQn33qpqa+R11+IVPQniiJrxF94oSYHCiaaHpcAPXKl/nmQEF9K5QDdHlfx9nORMPx0nz4xK3iyCY9nRXEiDCY8RsdL3D5KgvrZdZ+/jIIuCpOvGmHUC9XH3fpayjYyCeetUhTJ1quyUw3EHsnuZbVA/yAA5AegGxulJ92X1rdy+yEz2OIXr2Gp2arc3stNzinxNsj4KnFwYz72rdWZk3Xgtz1iZREexPxw2IJnQxoPT62jx9TXIvFTHaWMeC7Gbcdr2mUj5Ef9lMBHzZlpTbItrExPTSwiTa76EN7JU4881RLai/vrm3CD4vgAX4+YZGtlZcho7k38eMZaFlcJpwjAD1iGV1YloEi0BIbV0wOssY0Ki9QbQiecV/OZkUmorzeDmefBMA9vnx0hB1ioGBXaRoioB09BGWyyZpui6HVYig1uhFbbmgz+ohhDXu+qalkQqwu7+iUxaRMgip76qmoweuJ3Fq5UpgljlwU+hD9h+5QiSCRUnapfIXUxGG+BBihMeUl1jfn95AYZpNaZPBAd+V/bj+T1736EvPUbkuIOnRnlCVnM2KC875Yv03AoeeoNTSvAvj5lC/mlgnYmTSND8gqShS16abaoUiniIz/7xJpUgMeQJOVmxqjjIwYwoYrQ8dZKtxs7sOSVx39rosl3CoGM9KLu8PT/ek4MHhlKrivt907b5n1RT8wrhBU0dz9HgGU4FYdG/48uMO42B9+bCKnFZQKFkoEwp6ayjKdDxiAz7xJYn6JADGxKF2rjL9nyWX480gG+itn9aXJDJ2LmY5pyjiunKaX69hVjW3GC34lkAa/hFoWFYX4ObIcZaEjlv2r1gUAIds5WeNh7iicXt+17rDBPlvJtbpP6zijfoOwk+WUQeZzXsXvfz381WdveqeDyGHvrUia6JyAt/OEiug7/g06eZRE5n0fjp3SxTL/tlGKG/CMaqxD+9wTit8b8mmq2iIl7JDfU2ouYPzWmUIhxpGpVi/NC/aJfypwyJAHxLC3JYrV2AGdJe+HAzzPvF1hs4TbWmLnnJsmZtzjmtc0yCiimT8R7zuBvsCj0daV86vn/00nA44D5Svl5SZmLKyM2uk2wRIHZtP3h2c17GzBmDtfet0kI+sTwxcX5GJL/R8CWMXyb50StYGt5Z0bTU/e7t+wifK8NFTfTsENFLOETKQ8UgHwFB1z+VUCwKp5AUDYL9cX12JBoeWmTMmxOPVezY+N4LDZ5Xv3eT93S5Tw/hMjgRS1nYYHCLJVnf8txNLHy7U8HZxAeZ5nWabH9WP0QTP3XXTptwobFz4S9rRHi7/IuZhHExusLHKxeTlMRIoTuM5cM52ELZUXqttKLpsp7/hNGQp9hfX7EJZ/HN33ru/KOQgN55YisuZldt7rg37sekqhAgZ1MjeReu01Bh4AllG5OVhYz0zL3UuW/D8EEZK/0lL6yxOL2Ym6Tq2x0tz3X7ukzcESOKXZOsIq/T8M1jk17YlQuFKJU8Ny0yTNqxLhd8DndA6Y6Zm9GPL5fgzg0QQ26GZF8ZXilTpPyeCBc5M0r9xmkbmuPZDLoKqXzPYEKkqAZVb9+sXLf5y6yBtwYe+a5C7wXqP9dYrLZD3MXIf7ppumu/f2dBw6lY8V1VLGa+pF6cI3BjP2GTJLXLOjD0Q/W+X5CgrFYrmvprvta6RVQfta3aZmoOHsfcj+W3ZikZK5iZo9wqy1SrHQsVLcu1mwe4dccGPmuPiFfvOzcDfqkGz8QA1NHa3NC+iFkfCXe7MP+ezen1kCv68RPPXOfF9EYyFxG8zrTDYcxQmQwBJHpOT4KrDESaflLv4biA47C3MvwriBqpu3LsSkpSpN846g1Z9UtNyEWlrTqZV/+Bihh+U4EX+ob275bgQmrL6z+8eaTKti2/Ccxmbl5AbllhuZDB7IJ7UkHT/Mr73Pw3OoFznpFn4RH3GD94W+XphpERrDEBqrYQH57I1UCx4oJrW4s8rkKILcjcJ9gsxKisPHeFcvxL09tWvh1gokZj5sP8rp/5Rq1/MUuEwOvVAezAiTr6JSms43uvAtZaMn82I7Pt1PpGKrDf8gQgkyd73P5Xlh/qeM4HZdgAyE8ZR+InoDtrIXxSuRjPJGPDzqLKhLqunWNTJK93c6HpUNq/xgxLnhp8191i+Jm7xXZH5ijrKMYp03vs6O9sV0yL0TQB+Ww1Ome4kHnrXtsBACJBQFkKDq1HbvDeJLlynrtLMOysQUHEq+0zaYyO/d3+SGq9BpfoBI88IFgR67llPVo58Ih5NYr1iHlaoKlVscd3D1N72NZf35xx8OXGdnmJUPG2U2W3hzepBi7T/PMxu2/44Vss9tiqXk5kW0Nc3ppqpcoYkvG0jlmQhnoAx8HpPHVtMMz/PdrszzDEPMgVTxM4PETPnBiJLQS1ODifl4NLc5Ey0tTaVs9kYJ8O5qVq184VoizAfRa/5Lr55JoqU/FK2Kcx0KUnzXJtbNeJCtW1Mm5dfH7JPK7h2WdajmBQShGQ+61W99vdzCiilB9BVUkzCf+3L6scjrSgIF6Pngpt7VDP9CSHS8ZQ+rbdxTgIccNCod6zCzCa8cwbhAdQ0uZKnOBFZSJSz73Y+2Zjc4jkDlXVc9McgFpqkLC+V01k3/M6UD9OtOvQG4XaVlIcK4kOvlCJzbHYwqNfRoNo6m9UcIG/7rvgOJ9PxRtNbZ4Q77X7TNFersdPofFbCE4xw1P7ocYkUoYDP5la9LhZ1UAK5Uh9DiU3o3AwTaBsUahmuTSYnCmOtweFQEWBPgoDJ0KIHREn/ORSDV2UeNauIDqxvPMh3yASPV1JgstQEolW2/ti/msZT22BVSk+F8BklfwHaCZDyI14bWlRmGoZEwjNzVjHVkj5Ogw5J+VZhdB8se6mK/s+cAfECmE5DdnPHbz8ZmopGWG3vhTPwuHowp9UyZftMsS5UkjruZBCXLuFuPzZ+Hjc0qVZdSbQQndPTTxNps/Osf8Tcba3LSOwIHatbWW6kMTTPTo+Q+AEf2G2dxyg8gfG+O1lx4BTsPbqKInVyQrk8EQWSBsHscG8JgRgGhUE136KroKV+ZogOE+hcNkaK4b6i4u3xHFUbM2yG+x08umMnPLjIlvzny23wkVHPohSf8kOndM9e01l+tQv+qpqo2JaP/xDnWS7aIdM+aRcuOOGq0bApyIGxvl/s7Uh+N/Al/jxrGMtIAV5ZwcpgeaMZIKb0M64OWwHfhGZ0Mf5v3VvMqkx3vuo/F2NyeT1PmSI3pez/5NZXDoAnvYhNr60Warr3Jfo7+9ng0f1Q7kzA66wVnSH5vzrWhwFyJZaabqaXFcxXTvM5gYU6CM+TyzAj78fxLcxJ4MB6+h8ek/J4aof+NG+oDX1+/3A5FPSJPZtZZPJq4OanYFYZ2Dw+jbkQ6/nGrjM2U+doxtThsKUDwX2YplUzdVqDA8t6vg24+2p0x0p2Hl3r5OYv9Q4X0OhIGOyypHo3nvmKRzu/l0w06OttNMGIn415HWacp0YAfepFJP5tAKj/lGk99MHNR4sfZTDFeg71ef0QgAZc8+jb0T8RlmAtiSQofhycnAtaB9KDBEsRRlaf23XPfG8/bVcFNlMi42/hQ1s8KBJICJZdJX3/SdPQaGERrS/aDlK0E3vB5Zjr0tEzuU1/cu0+2BmMrhQ6aKOM8s00mKlaP0MYSgW4bPKPGVYhe0ca6aR2UdtiINgd0G6xz3EfeNtY6Z/qN3YCjWq+G4kbB0bOXz7h6tOp7CgXsTH1zot57COCxmIIP1mmzJwdLj3n2r40nerDxMIc96V6nxg0WlJfLpwNq1NsCKIx0r6/Rhgg7220Houmr/O3VgBTbR/h0m1kWPnweyHESImrlZoO+1mVSZvPywUTkbMToHB6e8SWd0n5db0/zm0Mdpm8j5cGaN3vlcah+LRqM43xPTbpagBY78VzDF4Y7w1gPBjLGx/eYJ7ZOSGzXdc+WEmx8bziw3WgMWPtlK88Z1rZQo19t2EBcMpXDo6UMZps5S02H5cunJg49HdQ958l4FfPiKiGgOkZ6BoLQM4zFavTsg6UxGxBiEqLnKMCNHvusGuYrM7gSh5mcxDskfx1XhwVbr//nya5VbgO270/hFGHDEqhoCA15MiTuB1ngLOfFqkhqMhchcTQE1ry7+oVJ6vMHQFx0yvxMzhEd4ALxFLdC6wpVxGwGQ/SsuQGlxeNUC/5xk8KG/7R3pcuJAkGYYThHCCAioCKHyCko4JF9/xfbHRIVBN3sVYupfP+SUotp+pqer3tGyYe6F0CleofYMu1Q99lRzHe1KxRqRYxk8/rMqXMdYIardRsKb88O5pg1LX+ru5jtoh+u1hFdUmAtSudOTcJZYu/MGp3yCKNGjfKTRvwDgLzkPx5xaYgQxzuVZ3T3CtDhLGxNJ9Q474vBtZcTrxzbXIAAktWcKxwe1Xv9+KWrawTMOcxFrv3yKg03nacUp2zjLQyg51OIY8/zZpudIFup2sOMnQZJVDDHqwffNSYzpM5bjPdfEUG8H2jhIvk+axjIvD1gj6qbY6HYiaWg3JLXYGUXxP8HH1AkRVGsErknn5114yeiq1dAXMtTlyug1RE+QXlnjrBGhnDhZjo1DeUbqQuriGwrG4asK+QbaUrsibXNcwE25oghgFal9wrwhMXMFLqXY+jEph2GSTqWLvwQbHMHUO8mKdsgKVu8drO6IlF4xljxt2yz8Td/qYeqlD08RJRhxTlDUhliIMgTEj+QF9ZeIsh7/TnEOR7nCDJ9SRykkaLWC/PCXIiwFPCwE5J8I28J82y9lp2Z0mBjQ2uUejnsc5VBo4hPJov/3pd2BW+NcOI1U95ChXfPpyN5taAv6sQJ63fvD3gG4OSnhHPT8rwtdk7QJf0lqgkcjRuKhFLsfQCvebaPj0aHBJj9iDP2Sj9nKBl9r1Zu12kRky3nZeVwCKHzTouP98cNABDUQUzZMbhMa7/OlqU2F39i21mLFBINx6qulB5SWckJ9f723DVzp5Or1pZC+vGZl+iYJoa5IKpyIXMEIwrcm36k9cX1Vv1D+Ize0B7uVXch2+Kh5sTwQM9GW56+dGW9mI+uu3Cme+m8pEzcjiaSnhPCGkKhYAqdrOnWYu3NSFYZh2vwoF7YbuiRvGHEqluAVRozBI1r4j+VD2B4WZvH7l5ipXxXK5zLya8MH0qu/sbQwrxt056esopH4L5sgpZsqLAakDtuQ8zEC6EcQzEfEnABRHy+2SDnkOyjl0QGkOBdRfLTJAxNDdS9phA8pC+b7bu3fXUIDeb3UCe7WuNtjn4+wRB/BRWLVQHxH8JCEHmagT8vPkMnc0dtFrA1hOz4MUTjhsCy/BdziFF10m9oqOFusEbVTD225C35KSsg8RcBnTIY3w7uUYfpjTsoTrcESnYb7/i/JCDArZa3/CjS90TiadBDMJ0khwXz51rDrzxj8u1WNsvBjNH5EIB88MlOy81U1Qr0B76m0A76hOyRzRM4nDag3NN+wypHc7YS6d+QjLiYmUeF7F7puBQGMmHo1wCLmU718ZO39qmsHPhxa8o1r58lRiXz4illgwG4sr9vn2Qj3V4DAnLwoVxoYb05Bfp4RPZ2Odmv/NPZVAsoXx7ZfiKpRjCHrWGWKN/lgshzeDQGRGfebjZfBmHqT+63KS9zRDw9oFPaUY9VTCEf4H9PgvRFisbHo39CxC4QCQAZIZ6MWPIB31JyX8WnNakOUX7uSjcCmmTa/nbNFqr8IPMO+DbkR6IJZ8LgKjh/aGFzu0VQTuIej6TBoMX67WI0tuefwaI6QEIZJ2cVIgOzK4VIJrKH/OUkLoXPKJpzEKs2lh5hHbIsth3GKCqtCEJM71DeJX2qLp48RH0ofZE1z9a1GdleflzxDk2Aac80BN1cljL/uVzNAwCah/zmEBhj5drjKuSuBddSy8kkwVLdyTz6LPHpFwAZThQWpXrCvXyBaqaKsTKU/X6fhKZ1UsuFgBnvn96YvvCFL3zhC1/4M3wH3Hr1c4kQw1kAAAAASUVORK5CYII='
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 285,
        height: 249
    });

    var textpath = new Kinetic.TextPath({
        fill: '#f7ff27',
        fontSize: 40,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        data: 'M37,173 L471,0',
    });

    var textpath1 = new Kinetic.TextPath({
        x: 150,
        y: -60,
        fill: '#f7ff27',
        fontSize: 40,
        fontFamily: 'FZCHJT',
        text: config.desc2,
        data: 'M37,173 L471,0',
    });

    group.add(image);
    group.add(textpath);
    group.add(textpath1);
}

ImageDrawManager.prototype.group_item_30 = function(group, config) {

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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'
    var image = new Kinetic.Image({
        x: 37,
        y: 31,
        image: imageObj,
        width: 163,
        height: 76
    });

    var rect = new Kinetic.Rect({
        y: 20,
        width: 800,
        height: 110,
        fill: "#000",
        opacity: .49
    });

    var rect1 = new Kinetic.Rect({
        x: 20,
        width: 180,
        height: 130,
        fill: "#f7ff27"
    });

    var text1 = new Kinetic.Text({
        x: 280,
        y: 45,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: 280 + text1.getWidth() + 30,
        y: 45,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    group.add(rect);
    group.add(rect1);
    group.add(image);
    group.add(text1);
    group.add(text2);
}


ImageDrawManager.prototype.group_item_31 = function(group, config) {

    var text = new Kinetic.Text({
        text: config.desc1.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: config.fontsize1,
        padding: 0,
        fill: config.color2
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth(),
        text: config.desc1.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: config.fontsize1,
        padding: 0,
        fill: config.color1
    });

    var text2 = new Kinetic.Text({
        y: text.getHeight() + 20,
        text: config.desc2.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: config.fontsize2,
        padding: 0,
        fill: config.color1
    });

    var text3 = new Kinetic.Text({
        x: text2.getWidth(),
        y: text1.getHeight() + 20,
        text: config.desc2.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: config.fontsize2,
        padding: 0,
        fill: config.color2
    });

    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_32 = function(group, config) {
    var path = new Kinetic.Path({
        x: -4,
        y: 0,
        data: 'm0,0.673l0,-0.673c0,0 141.37601,12.8 335.302,12.8c193.927,0 359.034,-12.126 359.034,-12.126s-90.521,29.64199 -90.521,49.51499c0,19.87401 90.521,46.821 90.521,46.821s-163.07202,13.47301 -358.35501,13.47301c-195.28299,-0.00099 -335.98099,-13.474 -335.98099,-13.474z',
        fill: '#aacd06'
    });

    var path1 = new Kinetic.Path({
        x: -4,
        y: 6,
        data: 'm0,1.58163l0,-0.58163c0,0 135.064,11.0622 320.332,11.0622c185.26801,0 343.004,-10.4797 343.004,-10.4797s-78.229,27.86651 -77.479,42.7924c0.75,14.9259 77.479,40.4642 77.479,40.4642s-155.79099,11.6439 -342.35501,11.6439c-186.56499,-0.0009 -320.98099,-11.6446 -320.98099,-11.6446z',
        fill: '#aacd06',
        stroke: "#fff",
        strokeWidth: 4
    });
    path1.dash([8, 8]);

    var text = new Kinetic.Text({
        x: 20,
        y: 30,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: '#fff'
    });

    group.add(path);
    group.add(path1);
    group.add(text);
}

ImageDrawManager.prototype.group_item_33 = function(group, config) {
    var text = new Kinetic.Text({
        text: String.fromCharCode("0xe603"),
        fontFamily: 'ICON',
        fontSize: 240,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        y: 100,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 45,
        width: text.getWidth(),
        align: "center",
        fill: config.color1
    });

    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_34 = function(group, config) {
    var text = new Kinetic.Text({
        text: String.fromCharCode("0xe604"),
        fontFamily: 'ICON',
        fontSize: 550,
        opacity: .4,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        y: 260,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        width: text.getWidth(),
        align: "center",
        fill: config.color2
    });

    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_35 = function(group, config) {
    var text = new Kinetic.Text({
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#080808'
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth() / 2,
        y: text.getHeight(),
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#febf46'
    });

    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_36 = function(group, config) {

    var main_font_size = 70;
    var total_width = main_font_size * config.desc1.length;
    var radii = Math.sqrt(Math.pow(total_width / 2, 2) + Math.pow(main_font_size, 2));


    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(0, radii, radii, 0);
            grad.addColorStop(0, '#f6d880');

            grad.addColorStop(0.3, '#9c6324');

            grad.addColorStop(0.5, '#f6d880');

            grad.addColorStop(0.7, '#9c6324');

            grad.addColorStop(1, '#f6d880');
            ctx.fillStyle = grad;
            ctx.font = "70px LTCH";
            ctx.textAlign = "center";
            ctx.shadowBlur = 1;
            ctx.shadowColor = "#995007";
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.fillText(config.desc1, radii, radii - 70 + 20);
            context.fillStrokeShape(this);
        }
    });

    var shape2 = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(0, radii, radii, 0);
            grad.addColorStop(0, '#f6d880');

            grad.addColorStop(0.3, '#9c6324');

            grad.addColorStop(0.5, '#f6d880');

            grad.addColorStop(0.7, '#9c6324');

            grad.addColorStop(1, '#f6d880');
            ctx.fillStyle = grad;
            ctx.font = "60px LTCH";
            ctx.textAlign = "center";
            ctx.fillText(config.desc2, radii, radii + 20);
            context.fillStrokeShape(this);
        }
    });

    //默认宽度和高度都是1024
    var main_path = 'M454.705919 811.999573c35.374657 0.100284 50.295479-17.470899 75.208881-24.067128 26.515899 22.981401 83.015681 25.070991 113.313718 5.013175 13.684668-9.059326 22.581288-23.103174 35.098365-33.091662 79.930414 6.79782 109.693262-12.807695 133.369488-74.206041 48.442272-0.50142 82.265598-27.663025 96.26749-63.174805 3.69925-9.387807 4.353143-40.749059 8.021694-47.131417 10.027373-5.348819 20.057816-10.696615 30.083143-16.045434 17.472946-11.87444 32.713039-31.391951 39.1087-54.150271 6.191-22.02768-6.578833-57.974365-2.005679-70.194683 26.920105-12.684898 50.504233-63.032566 39.1087-104.289184-4.781908-17.311264-16.949013-30.054491-21.057586-46.128578 22.993681-26.529202 25.066898-83.019774 5.012152-113.314741-9.059326-13.685691-23.102151-22.581288-33.091662-35.097341 6.79782-79.930414-12.806672-109.693262-74.206041-133.370511-0.50142-48.472971-27.637442-82.257411-63.174805-96.266467-9.381667-3.697204-40.756222-4.357236-47.131417-8.021694-5.347796-10.02635-10.695592-20.056793-16.044411-30.084166-11.875463-17.472946-31.391951-32.713039-54.150271-39.1087-22.02768-6.191-57.974365 6.579856-70.195706 2.005679-12.61736-26.777865-63.115453-50.693545-104.288161-39.1087-17.19563 4.839213-30.121005 16.967433-46.128578 21.059633-26.540458-23.00289-83.017727-25.069968-113.314741-5.014198-13.685691 9.060349-22.580265 23.103174-35.097341 33.091662-79.931437-6.796797-109.694285 12.808718-133.369488 74.205018-48.38599 0.762363-82.348485 27.456317-96.26749 63.175828-3.718693 9.54335-4.264115 40.483-8.021694 47.130394-1.398859 2.478447-33.160224 18.157538-38.10586 22.063496-27.85029 21.989818-42.701527 70.176263-27.074624 115.319397-22.587428 24.558315-55.198137 56.000408-41.114379 107.297703 4.129039 15.035432 18.966972 30.534421 21.058609 43.120059 0 0-18.121722 47.267517-20.05577 59.163446-7.735168 47.586788 29.810944 69.118165 48.134257 92.256132-6.79782 79.93246 12.806672 109.694285 74.206041 133.370511 0.511653 64.126479 44.962009 104.495892 110.305199 104.289184 18.476809 39.814781 40.313131 65.300211 92.257155 72.200362 17.18642 2.281972 36.841054-9.052163 48.133234-5.014198 8.307196 17.059531 36.438895 33.66369 56.154928 39.1087C442.003625 809.993893 448.356307 810.996733 454.705919 811.999573z';

    var path = new Kinetic.Path({
        x: 0,
        y: 0,
        data: main_path,
        fill: '#f8f0da',
        shadowBlur: 2,
        shadowColor: "#666666",
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        scale: {
            x: radii * 2 / 1024,
            y: radii * 2 / 1024
        }
    });

    var path1 = new Kinetic.Path({
        x: 10,
        y: 5,
        data: main_path,
        fillLinearGradientStartPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientEndPoint: {
            x: 1024,
            y: 1024
        },
        fillLinearGradientColorStops: [0, '#af6c31', 0.1, '#fbe08c', 0.2, '#881a19', 0.3, '#fbdf8b', 0.4, '#bb7119', 0.5, '#fade89', 0.6, '#ac662b', 0.7, '#f4d483', 0.8, '#9b4e21', 0.9, '#f4d483', 1, '#9b4e21'],
        scale: {
            x: (radii - 10) * 2 / 1024,
            y: (radii - 10) * 2 / 1024
        }
    });

    var path2 = new Kinetic.Path({
        x: 20,
        y: 10,
        data: main_path,
        fillLinearGradientStartPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientEndPoint: {
            x: 0,
            y: 1024
        },
        fillLinearGradientColorStops: [0, '#f8f0da', 1, '#dad2c4'],
        scale: {
            x: (radii - 20) * 2 / 1024,
            y: (radii - 20) * 2 / 1024
        }
    });

    group.add(path);
    group.add(path1);
    group.add(path2);
    group.add(shape1);
    group.add(shape2);
}

ImageDrawManager.prototype.group_item_37 = function(group, config) {


    //默认宽度和高度都是1024

    // var path = new Kinetic.Path({
    //     x: 10,
    //     y: 8,
    //     data: 'M1023.979011 293.33623c0-29.851888-117.757984-37.725206-128.310318-65.180512-10.30367-26.790156 73.844845-109.947088 54.830793-133.471874-17.783015-22.021549-119.014604 40.888246-143.278217 22.528086-22.570042-17.076934 12.475126-131.429355-14.781658-144.688333-25.546839-12.420891-94.589308 85.359087-123.502825 76.818573-27.336602-8.079002-31.695886-127.957277-61.431118-132.110877-28.316929-3.959172-65.561182 109.995183-95.502098 109.995183-29.93273 0-67.185168-113.954355-95.493911-109.995183-29.734208 4.1536-34.086329 124.031874-61.431118 132.110877-28.92375 8.540514-97.961102-89.239464-123.509988-76.818573-27.251667 13.258978 7.788383 127.610376-14.789844 144.688333-24.26259 18.36016-125.495202-44.548612-143.271054-22.528086-19.014052 23.542182 65.144696 106.681718 54.826699 133.471874C117.776904 255.611024 0.020966 263.485365 0.020966 293.33623c0 29.846772 117.755937 37.719066 128.312364 65.174372 10.317996 26.790156-73.839729 109.947088-54.826699 133.472897 17.783015 22.020526 119.007441-40.890292 143.271054-22.528086 22.578228 17.062608-12.470009 131.427308 14.789844 144.688333 25.539676 12.419867 94.587262-85.36011 123.493615-76.82062 27.355021 8.079002 31.704073 127.9583 61.431118 132.109854 28.325116 3.961218 65.571415-109.99416 95.510284-109.99416 29.939893 0 67.170842 113.955378 95.502098 109.99416 29.728068-4.15053 34.079166-124.030851 61.431118-132.109854 28.9084-8.523117 97.962126 89.240487 123.502825 76.804247 27.257807-13.244652-7.780197-127.609353 14.789844-144.67196 24.255427-18.376533 125.487016 44.548612 143.270031 22.528086 19.014052-23.542182-65.134463-106.682741-54.830793-133.472897C906.221027 331.05632 1023.979011 323.183002 1023.979011 293.33623z',
    //     fillLinearGradientStartPoint: {x:0, y:0},
    //     fillLinearGradientEndPoint: {x:0,y:760},
    //     fillLinearGradientColorStops:[0,'#f8f0da',1,'#dad2c4'],
    //     scale:{x:260/1024,y:260/1024}
    // });

    // var path1 = new Kinetic.Path({
    //     x: 0,
    //     y: 0,
    //     data: "M421.549453-79.418402c-1.349741 0-2.721994 0.089028-4.063549 0.274246-27.555589 3.832282-36.683481 38.645159-47.241954 78.957283-3.867074 14.767332-10.067286 38.434358-15.311731 46.967708-9.575076-4.078899-28.982078-21.589714-41.040718-32.458249-24.833595-22.425755-46.286186-41.770336-66.723657-41.783639l0 0c-4.738931 0-9.209756 0.998747-13.305027 2.983961-25.582655 12.387122-22.574135 50.471508-19.37528 90.784656 1.191128 15.115256 3.131317 39.418778 0.972141 49.015344-11.271718-0.047072-32.437783-7.396457-51.101865-13.903661-22.862707-7.941879-44.459584-15.464203-61.182454-15.464203-15.22168 0-23.583115 6.370081-27.926026 11.704576-18.504446 22.804379 2.484587 55.262628 24.697495 89.64674 8.40646 13.007245 22.043039 34.110889 24.234961 43.256176-7.67889 5.698792-32.353872 12.961196-47.575552 17.449417C37.338908 259.564056 0.262478 270.480686 0.262478 299.998977c0 29.520337 37.07643 40.434921 76.342736 52.003398 15.22168 4.471848 39.903825 11.733229 47.575552 17.433044-2.191922 9.15859-15.813151 30.247908-24.234961 43.269479-22.212908 34.370809-43.193755 66.845431-24.683169 89.632413 4.334725 5.351891 12.69002 11.704576 27.9117 11.704576 16.721847 0 38.318724-7.503904 61.182454-15.46318 18.664082-6.488785 39.829124-13.857613 51.101865-13.902638 2.159176 9.597589 0.218988 33.884738-0.972141 49.015344-3.197832 40.314171-6.222725 78.382185 19.361977 90.769306 4.108574 1.986237 8.579399 3.00238 13.310144 3.00238 20.438495 0 41.891086-19.360953 66.723657-41.784662 12.066827-10.869558 31.458479-28.381397 41.040718-32.474622 5.245468 8.550747 11.446703 32.216749 15.311731 46.968731 10.56052 40.313148 19.679202 75.137281 47.25014 78.973656 1.341554 0.181125 2.713808 0.273223 4.063549 0.273223 24.408923 0 41.312918-28.381397 60.893882-61.266365 8.3072-13.932314 21.687952-36.416398 29.547966-42.980907 7.862062 6.564509 21.248953 29.048593 29.540803 42.980907 19.580964 32.869618 36.493146 61.266365 60.894905 61.266365 1.356904 0 2.721994-0.091074 4.063549-0.273223 27.579125-3.836375 36.68962-38.645159 47.25014-78.973656 3.867074-14.751982 10.06524-38.417985 15.313777-46.968731 9.581216 4.093225 28.972868 21.589714 41.030485 32.474622 24.842805 22.423709 46.302559 41.768289 66.732867 41.768289 4.736884 0 9.217942-1.000793 13.302981-2.986007 25.592888-12.387122 22.577205-50.455135 19.382443-90.769306-1.205455-15.130605-3.122107-39.434128-0.975211-49.015344 11.277858 0.045025 32.426527 7.398504 51.097772 13.902638 22.864754 7.959276 44.467771 15.46318 61.190641 15.46318 15.22782 0 23.575952-6.367011 27.92091-11.704576 18.503423-22.816658-2.480494-55.277978-24.689309-89.645716-8.416693-13.008268-22.053272-34.096563-24.25338-43.269479 7.696286-5.686513 32.370245-12.94687 47.583738-17.418718 39.261189-11.5695 76.360132-22.484084 76.360132-52.003398 0-29.518291-37.098943-40.434921-76.360132-51.987025-15.213493-4.488221-39.902802-11.749602-47.583738-17.449417 2.200108-9.145287 15.83157-30.248931 24.25338-43.256176 22.208814-34.385135 43.192731-66.842361 24.689309-89.64674-4.344958-5.335519-12.69309-11.717879-27.92091-11.717879-16.72287 0-38.325887 7.535627-61.190641 15.477506-18.663058 6.507204-39.818891 13.856589-51.097772 13.903661-2.162246-9.597589-0.230244-33.901111 0.975211-49.02967 3.193739-40.298821 6.209422-78.383208-19.382443-90.77033-4.078899-1.971911-8.566096-2.970658-13.294794-2.983961-0.008186 0-0.008186 0-0.008186 0-20.444635 0-41.881876 19.357883-66.732867 41.783639-12.057617 10.884908-31.448246 28.378327-41.016159 32.474622-5.262864-8.550747-11.453866-32.205493-15.313777-46.971801-10.56666-40.325427-19.684318-75.138304-47.264467-78.970586-1.327228-0.185218-2.698458-0.274246-4.055362-0.274246-24.40176 0-41.313941 28.379351-60.886719 61.265342-8.308223 13.947663-21.695115 36.417421-29.557176 42.963511-7.860015-6.54609-21.239743-29.015847-29.540803-42.963511-19.588127-32.869618-36.493146-61.265342-60.887742-61.265342L421.549453-79.418402 421.549453-79.418402z",
    //     fillLinearGradientStartPoint: {x:0, y:0},
    //     fillLinearGradientEndPoint: {x:1024,y:1024},
    //     fillLinearGradientColorStops: [0,'#af6c31',0.1,'#fbe08c',0.2,'#881a19', 0.3,'#fbdf8b', 0.4, '#bb7119',0.5,'#fade89',0.6,'#ac662b',0.7,'#f4d483', 0.8,'#9b4e21',0.9,'#f4d483', 1, '#9b4e21'],
    //     stroke: "#f8f0da",
    //     strokeWidth: 20,
    //     shadowBlur : 2,
    //     shadowColor : "#666666",
    //     shadowOffsetX : 1,
    //     shadowOffsetY : 1,
    //     scale:{x:280/1024,y:280/1024}
    // });


    // group.add(path1);
    // group.add(path);

    var scale = 280 / 1024;

    //983*726
    var path = new Kinetic.Path({
        x: 0,
        y: (726 + 30) * scale,
        data: 'M1003.656161 432.848681c0 28.544103-113.159246 36.07359-123.301234 62.328557-9.901511 25.618471 70.962192 105.129362 52.691059 127.641075-17.090237 21.059642-114.368794-39.117926-137.675616-21.544689-21.689998 16.317641 11.980869 125.687584-14.2127 138.354068-24.543999 11.893888-90.901313-81.59946-118.681006-73.448826-26.28669 7.725962-30.467919 122.369002-59.032488 126.338407-27.225061 3.786233-63.000869-105.188714-91.774193-105.188714-28.76923 0-64.562435 108.97597-91.77931 105.188714-28.566616-3.969405-32.745798-118.612445-59.033511-126.338407-27.777647-8.165983-94.128821 85.34169-118.671797 73.463152-26.194592-12.68081 7.484462-122.050754-14.210653-138.368394-23.317055-17.557888-120.588449 42.60433-137.678686 21.544689-18.270109-22.49841 62.60178-102.022605 52.68492-127.641075-10.143011-26.254967-123.30021-33.784454-123.30021-62.328557s113.157199-36.072567 123.30021-62.328557c9.915837-25.618471-70.956052-105.128339-52.68492-127.639029 17.083074-21.061688 114.362654 39.101553 137.678686 21.543665 21.695115-16.33299-11.976776-125.688607 14.210653-138.370441 24.551162-11.875468 90.89415 81.630159 118.687146 73.464175 26.278503-7.726985 30.460756-122.366955 59.033511-126.338407 27.201525-3.787256 63.001893 105.188714 91.76396 105.188714 28.7723 0 64.564481-108.97597 91.774193-105.188714 28.572756 3.971451 32.762171 118.611421 59.032488 126.338407 27.78481 8.165983 94.127797-85.339644 118.681006-73.464175 26.193569 12.681834-7.484462 122.037451 14.201443 138.370441 23.318078 17.557888 120.596635-42.605354 137.686872-21.543665 18.270109 22.496363-62.59257 102.020558-52.691059 127.639029C890.496915 396.776114 1003.656161 404.304577 1003.656161 432.848681z',
        fillLinearGradientStartPoint: {
            x: 0,
            y: 760
        },
        fillLinearGradientEndPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientColorStops: [0.5, '#f8f0da', 1, '#dad2c4'],
        scale: {
            x: scale,
            y: -scale
        }
    });

    //1024*758
    var data = "M1023.053953 432.848681c0 29.497824-37.072337 40.406269-76.30385 51.964512-15.20326 4.469801-39.860846 11.726066-47.549969 17.409508 2.196015 9.16473 15.82543 30.239721 24.232914 43.237757 22.194488 34.345226 43.163055 66.781986 24.672936 89.582271-4.339842 5.332449-12.682857 11.69639-27.89942 11.69639-16.712637 0-38.300304-7.499811-61.146639-15.452947-18.657942-6.500041-39.793308-13.847379-51.064003-13.893428-2.14485 9.574053-0.227174 33.860179 0.976234 48.980551 3.189645 40.284495 6.205329 78.326926-19.36914 90.704838-4.084015 1.984191-8.558933 2.984984-13.293771 2.984984-20.414959 0-41.860387-19.332301-66.685795-41.739637-12.050454-10.877745-31.426757-28.360931-41.001833-32.452109-5.242398 8.544607-11.43954 32.194236-15.303544 46.935985C642.765741 773.109248 633.662409 807.894496 606.10375 811.726777 604.763219 811.907902 603.399151 812 602.043271 812c-24.38334 0-41.285289-28.377304-60.850903-61.223387-8.28878-13.923104-21.665439-36.390815-29.521361-42.951231-7.854898 6.560416-21.225417 29.027104-29.526477 42.951231C462.576869 783.638045 445.68413 812 421.293627 812c-1.348718 0-2.719948-0.092098-4.060479-0.273223-27.550473-3.833305-36.664038-38.632879-47.217395-78.918397-3.862981-14.740726-10.0591-38.391379-15.300474-46.935985-9.575076 4.091178-28.953426 21.589714-41.012066 32.452109-24.815175 22.406313-46.25344 41.753963-66.676585 41.753963-4.727675 0-9.195429-1.014096-13.300934-2.99931-25.567305-12.377912-22.543436-50.420343-19.346627-90.704838 1.189082-15.120372 3.127224-39.391149 0.969071-48.980551-11.264555 0.045025-32.414247 7.408737-51.062979 13.893428-22.847357 7.953136-44.428885 15.452947-61.139475 15.452947-15.210423 0-23.558555-6.348592-27.891234-11.69639-18.499329-22.77061 2.468215-55.222719 24.663726-89.568968 8.416693-13.011338 22.028713-34.087353 24.218588-43.237757-7.66661-5.696746-32.330336-12.95301-47.541783-17.422811C37.354258 473.254949 0.304434 462.346505 0.304434 432.848681s37.049824-40.406269 76.2885-51.952232c15.211447-4.483104 39.868009-11.738345 47.541783-17.436114-2.189875-9.137101-15.817244-30.224372-24.218588-43.223431-22.195511-34.361599-43.170219-66.797335-24.680099-89.583295 4.340865-5.334495 12.697183-11.69639 27.907607-11.69639 16.71059 0 38.292118 7.515161 61.139475 15.45397 18.649755 6.500041 39.799448 13.846356 51.062979 13.892405 2.158153-9.591449 0.220011-33.876552-0.969071-48.980551-3.196809-40.284495-6.204305-78.343299 19.361977-90.718141 4.090155-1.986237 8.55791-2.986007 13.293771-2.986007 20.423145 0.014326 41.860387 19.34458 66.677609 41.753963 12.050454 10.864442 31.44313 28.360931 41.012066 32.435737 5.240351-8.528234 11.43647-32.17991 15.300474-46.933939 10.55131-40.284495 19.674085-75.070766 47.208185-78.902024 1.340531-0.184195 2.711761-0.274246 4.060479-0.274246l0.013303 0c24.3772 0 41.269939 28.376281 60.844763 61.222363 8.293897 13.938454 21.664416 36.391838 29.519314 42.936905 7.855922-6.545066 21.23258-28.998451 29.535687-42.936905 19.557428-32.861432 36.461423-61.222363 60.84374-61.222363 1.355881 0 2.727111 0.090051 4.053316 0.274246 27.558659 3.831258 36.670178 38.617529 47.228651 78.918397 3.855818 14.756075 10.045797 38.390355 15.303544 46.933939 9.56075-4.091178 28.936029-21.573341 40.987506-32.452109 24.833595-22.408359 46.254463-41.753963 66.685795-41.753963 0 0 0 0 0.007163 0 4.727675 0.014326 9.210779 1.013073 13.286608 2.986007 25.574469 12.375865 22.558785 50.433646 19.36914 90.702792-1.203408 15.119349-3.13541 39.405475-0.976234 48.996924 11.271718-0.046049 32.413224-7.393387 51.064003-13.892405 22.846334-7.938809 44.434002-15.467273 61.146639-15.467273 15.216563 0 23.558555 6.375198 27.89942 11.709693 18.489096 22.786982-2.478448 55.222719-24.672936 89.583295-8.41567 12.999059-22.036899 34.087353-24.232914 43.223431 7.673773 5.697769 32.345686 12.95301 47.549969 17.436114C985.98264 392.442412 1023.053953 403.350856 1023.053953 432.848681z";

    var path1 = new Kinetic.Path({
        x: 0,
        y: 758 * scale,
        data: data,
        fillLinearGradientStartPoint: {
            x: 1024,
            y: 1024
        },
        fillLinearGradientEndPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientColorStops: [0, '#af6c31', 0.1, '#fbe08c', 0.2, '#881a19', 0.3, '#fbdf8b', 0.4, '#bb7119', 0.5, '#fade89', 0.6, '#ac662b', 0.7, '#f4d483', 0.8, '#9b4e21', 0.9, '#f4d483', 1, '#9b4e21'],
        scale: {
            x: scale,
            y: -scale
        }
    });

    var path2 = new Kinetic.Path({
        x: 0,
        y: 758 * scale,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 40,
        shadowBlur: 2,
        shadowColor: "#666666",
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        scale: {
            x: scale,
            y: -scale
        }
    });



    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(0, 280, 280, 0);
            grad.addColorStop(0, '#f6d880');

            grad.addColorStop(0.3, '#9c6324');

            grad.addColorStop(0.5, '#f6d880');

            grad.addColorStop(0.7, '#9c6324');

            grad.addColorStop(1, '#f6d880');
            ctx.fillStyle = grad;
            ctx.font = "65px LTCH";
            ctx.textAlign = "center";
            ctx.shadowBlur = 1;
            ctx.shadowColor = "#995007";
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.fillText(config.desc1, 280 / 2, 280 / 2 - 60 + 10);
            context.fillStrokeShape(this);
        }
    });

    var shape2 = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(80, 280 / 2, 220, 100);
            grad.addColorStop(0, '#985e20');

            grad.addColorStop(0.4, '#cdab60');
            grad.addColorStop(0.5, '#985e20');
            grad.addColorStop(0.6, '#cdab60');

            grad.addColorStop(1, '#985e20');
            ctx.fillStyle = grad;
            ctx.font = "45px LTCH";
            ctx.textAlign = "center";
            ctx.fillText(config.desc2, 280 / 2, 280 / 2 + 5);
            context.fillStrokeShape(this);
        }
    });

    group.add(path2);
    group.add(path1);
    group.add(path);
    group.add(shape1);
    group.add(shape2);
}

ImageDrawManager.prototype.group_item_38 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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'
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 280,
        height: 77
    });

    var text = new Kinetic.Text({
        y: 10,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 50,
        padding: 0,
        width: 280,
        align: "center",
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: 280,
        y: 45,
        text: config.desc2.slice(0, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: 280 + text1.getWidth() + 30,
        y: 45,
        text: config.desc2.slice(4, 8),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 15,
        width: 800,
        height: 110,
        fill: "#000",
        opacity: .49
    });

    group.add(rect);
    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_39 = function(group, config) {

    var shape1 = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(0, 280, 280, 0);
            grad.addColorStop(0, '#f6d880');

            grad.addColorStop(0.3, '#9c6324');

            grad.addColorStop(0.5, '#f6d880');

            grad.addColorStop(0.7, '#9c6324');

            grad.addColorStop(1, '#f6d880');
            ctx.fillStyle = grad;
            ctx.font = "65px LTCH";
            ctx.textAlign = "center";
            ctx.shadowBlur = 1;
            ctx.shadowColor = "#995007";
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.fillText(config.desc1, 150, 180);
            context.fillStrokeShape(this);
        }
    });

    var shape2 = new Kinetic.Shape({
        drawFunc: function(context) {
            var ctx = context._context;
            var grad = ctx.createLinearGradient(80, 280 / 2, 220, 100);
            grad.addColorStop(0, '#985e20');

            grad.addColorStop(0.4, '#cdab60');
            grad.addColorStop(0.5, '#985e20');
            grad.addColorStop(0.6, '#cdab60');

            grad.addColorStop(1, '#985e20');
            ctx.fillStyle = grad;
            ctx.font = "45px LTCH";
            ctx.textAlign = "center";
            ctx.fillText(config.desc2, 150, 240);
            context.fillStrokeShape(this);
        }
    });

    //默认宽度和高度都是1024

    var scale = 280 / 1024;
    var path = new Kinetic.Path({
        x: 0,
        y: (948 + 10) * scale,
        data: 'M998.366691 522.302015c-28.960589-2.481518-107.11867-50.80306-122.498962 4.938476-3.041266 11.010775-61.669548-15.353686-74.750471-15.666818-30.351262-0.773619-36.994566 30.563086-45.603641 54.358025 6.034437 13.685697 12.002358 27.490098 19.800975 40.283472l-3.165086 1.213641c-10.588149 3.931542-29.183669-18.707061-34.910091-24.031323-20.097734-18.721387-42.038442-35.115776-66.590628-47.562249-33.507138-16.972557-49.520857-48.878221-91.229794-46.684252l-7.616468 8.426927c-17.250896 19.025309-3.952009 62.463634-2.38021 86.418208 0.413416 6.206352 9.895371 31.127951-1.362021 32.978089-16.528442 2.702552-26.79118-2.242064-37.937031 14.542204-8.609075 12.947893-7.184633 36.139082-17.081027 46.712905-8.413624 8.885368-14.879895 16.101723-20.324908 27.371394-8.086166 16.762779-14.576997 34.745339-18.457374 52.966329-1.065262 4.999874-29.997198 52.960189-32.513508 42.47744-2.354628-9.829879 12.549827-25.901926 13.81361-37.585013 0.955768-8.919137-3.384074-16.937764-6.223748-25.370831-9.209756-27.356045-24.974811-53.148477-51.897997-67.547419-10.79895-5.752004-22.788006-0.846274-32.856315-5.355985-13.516852-6.060019-18.35709-42.883693-22.833031-54.829769-14.525831-38.873356-32.67212-50.665936-73.907267-47.979758-17.225313-1.673106-29.008684 8.482185-42.662659 17.443277l-0.602727-3.292999c-1.486864-8.42488 14.552437-24.538883 20.578688-28.856211 11.33107-8.111748 6.824429-25.355481 5.526877-36.973076-3.954055-35.164894 2.600221-68.447928 12.805654-101.576443 26.792203-86.962607-77.504188-86.436628-134.514623-65.209164l-6.760984 10.086729c-2.382257 4.3951-5.611811 7.975649-9.695826 10.723226-4.796236 1.441838 12.904914-25.914206 14.741749-27.539216 12.629645-11.222599 25.032116-20.073174 34.405601-34.380018 17.958-27.473725 34.933627-56.81703 55.966663-82.10088 10.410094-12.523221 28.225855-23.137976 32.106232-39.887452 4.420683-19.095917-9.338692-24.982998 17.829064-35.605939 17.764596-6.943133 37.901215-8.460696 56.488549-3.996011 11.954263 2.87856 36.153408 21.63474 48.77282 16.884552-7.748475 2.910283-78.646198-82.096786-86.445838-90.901313-36.594453-41.264822-71.314209-84.293825-103.975073-128.742153-24.926716-33.920554-48.958038-69.551052-77.459163-100.580766-5.278213-5.758144-34.051537-25.925463-28.79072-34.914184 8.084119-13.763468 15.438621-2.118244 20.643156 5.04183C148.298046-121.35349 200.95943-50.835414 256.969071 16.307799c26.445302 31.682583 53.474912 62.984497 81.912591 92.90904 6.001691 6.343475 43.695175 34.789341 44.207851 36.094056-1.518586-3.815909-8.918114-6.564509-11.4334-10.43056-5.823636-9.009188-7.738241-20.422122-8.317433-30.902824-1.043772-18.866696 1.956561-43.095517 16.108886-57.105602l5.415336-5.368264c36.729529 13.417591 29.163203-52.859905 56.443523-63.228043 34.45472-13.210883 50.640354-89.865727 65.199954-119.791294 17.759479-36.478819 2.622734 42.438555-1.602498 52.40351-5.581112 13.132088 4.323469 31.835056 2.851954 46.24423-2.575662 25.137517-4.964058 34.620495 28.852118 28.690436l10.453073-1.832741c15.003715-22.762423 38.838563-39.171138 61.646012-53.613058 7.676843-4.847401 91.26254-58.292638 92.589768-57.036018 3.449565 3.264347-4.322445 18.22099-5.03569 19.859303-12.955056 21.355377-4.997827 48.493457 3.166109 70.405513 15.59928 7.746428 31.390941 13.46057 49.167816 12.624529 18.859533-0.904603 44.848441-12.440333 56.208163 8.985652l4.727675 8.906857c23.322172 8.886391 45.573965 20.945031 70.644967 23.720238 14.140045 1.562589 58.988486-24.618701 63.383586-21.427008 9.991562 7.306406-43.423999 44.062542-48.866964 46.670949-24.13877 11.542894-51.424206 43.703361-64.739467 66.38085-7.176446 12.178367-7.633864 25.838482-1.064238 38.406728 8.143471 15.601326-12.920264 13.290701-22.922059 17.225313-20.018939 7.857968-40.011272 15.810081-60.004629 23.7581 1.604544 7.867178 3.209088 15.732309 4.801353 23.617907 16.048511 8.080026 32.859385 13.740956 50.517557 17.209964 25.65224 5.042853 45.534056 19.470447 69.441559 28.475542 9.394974 3.552919 75.125001 7.312546 38.770002 21.053502-21.481244 8.112772-39.931454 34.368762-33.063023 57.784054 3.306302 25.491581 51.871391 35.481096 45.083801 60.389392-6.215562 17.690918 8.236592 40.72247 17.810644 54.686507 11.595083 14.69877 22.898523 30.720675 37.137829 43.086307 9.742898 8.479115 33.490765 13.811564 39.409568 24.329105C1018.994498 525.065965 995.176023 522.013443 998.366691 522.302015z',
        fillLinearGradientStartPoint: {
            x: 0,
            y: 760
        },
        fillLinearGradientEndPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientColorStops: [0.5, '#f8f0da', 1, '#dad2c4'],
        scale: {
            x: scale,
            y: -scale
        }
    });

    var data = "M1021.264191 525.720881c-4.76656 5.716188-18.402115 4.295839-23.487947 3.538593l0 0.01228c-0.01228-0.01228-0.024559-0.024559-0.037862 0-6.443759-0.566912-14.372336-2.911306-24.295336-6.246261l-16.493649-5.635347c-23.351847-7.847735-46.924729-14.074553-61.310368-6.450922-6.29538 3.322675-10.546194 9.286504-13.014408 18.173918-0.713244 2.651386-2.512217 4.842285-5.027503 6.181793-7.846712 4.164856-22.233374 0.14224-50.970882-9.377578-10.272971-3.409656-21.916149-7.274684-25.667589-7.353478-20.171412-0.514723-27.28646 15.951297-35.843346 41.09393-0.688685 2.031263-1.367137 4.049223-2.062985 6.004761 5.498224 12.449543 11.178597 25.320689 18.244526 36.933167l4.38896 7.198959-11.073196 4.174066c-3.37691 1.25048-7.128351 1.196245-11.18576-0.161682-9.887184-3.322675-20.311605-14.242376-27.224038-21.476127-1.547239-1.622964-2.820232-2.966565-3.749394-3.837398-21.37789-19.903306-42.623773-35.091216-64.976874-46.417169-12.263301-6.231935-22.073738-14.126742-31.55467-21.760606-10.877745-8.789177-21.150716-17.08205-33.661657-21.289885-6.213515-2.094708-12.652158-3.070942-19.62599-2.998287l-5.618974 6.237051c-10.778484 11.908214-6.646374 38.655392-3.306302 60.146868 1.186012 7.704472 2.323928 14.96176 2.715855 21.142529 0.051165 0.845251 0.703011 3.517103 1.209548 5.67321 2.825348 11.874445 4.787026 22.25077 0.178055 29.17753-1.983167 2.979868-4.953825 4.877077-8.603959 5.463432-4.553713 0.75827-8.623401 0.958838-12.224416 1.153266-9.733689 0.49835-14.631232 0.753153-21.011546 10.361999-3.284813 4.952802-4.994758 12.641925-6.644327 20.082384-2.243087 10.072403-4.561899 20.499893-11.190877 27.574009-8.28264 8.749268-14.101159 15.258519-19.092847 25.608238-8.292873 17.191544-14.323217 34.491559-17.923208 51.395554C479.849254 766.004433 458.058972 802.531348 448.157461 808.134972c-3.226484 1.833765-5.91778 1.552356-7.619538 0.972141-2.812045-0.953721-4.858658-3.304256-5.622044-6.461155-1.90335-7.996115 2.7793-16.700357 7.323802-25.125237 2.90926-5.381567 5.932106-10.93198 6.343475-14.826684 0.566912-5.222955-1.426489-10.400884-3.702322-16.422018-0.762363-1.977028-1.518586-3.959172-2.187829-5.960759-10.266831-30.463826-26.592658-51.857065-48.551786-63.587224-4.352121-2.346441-9.162684-2.302439-14.497179-2.346441-5.796006-0.050142-11.995195-0.150426-17.924231-2.822278-13.105482-5.861498-18.621103-28.131711-23.041786-46.033429-1.270946-5.139044-2.473331-9.985422-3.517103-12.751419-8.90788-23.833825-18.61701-35.585473-33.502022-40.602743-8.478092-2.842745-19.072381-3.743254-33.340339-2.803859l-1.134847-0.020466c-12.363585-1.200338-21.709441 5.161556-32.543184 12.541641-1.842974 1.258667-3.704368 2.524496-5.596462 3.76986l-8.886391 5.829775-2.490727-13.756305c-2.438539-13.788028 19.285229-32.81436 23.388686-35.735899 5.815449-4.186346 5.018294-13.417591 3.371794-25.079188-0.270153-1.913583-0.528026-3.734044-0.716314-5.442966-3.538593-31.42471 0.499373-63.629179 13.063527-104.415095 10.024308-32.532951 1.12052-53.731762-26.456558-63.001893-28.737508-9.668197-69.769017-3.938706-96.788393 5.65172l-5.14416 7.633864c-2.928702 5.38873-6.949272 9.818623-11.941983 13.187347l-1.905396 0.892323c-1.595334 0.476861-3.252067 0.462534-4.761444-0.036839l-4.126994-1.681292-0.814552-3.945869c-1.666966-8.064676 16.817014-32.978089 17.744129-33.803897 2.701528-2.387373 5.384637-4.671393 8.017604-6.910387 9.43693-8.032954 18.314111-15.608489 25.169239-26.078958 4.441149-6.773264 8.807596-13.658068 13.192464-20.560268 13.346983-21.036106 27.149337-42.799782 43.265386-62.175061 3.559059-4.276397 7.840572-8.278547 11.987009-12.155854 8.489348-7.948019 16.506952-15.44783 18.689664-24.856108 1.159406-5.006014 0.793062-8.870018 0.433882-12.604062-1.199315-12.971429 1.63422-20.087501 21.652136-27.915793 19.270902-7.537673 40.828894-9.04705 60.699454-4.278443 4.774747 1.155313 10.94119 4.27435 17.45658 7.673773-12.964266-13.58132-30.847565-33.830503-55.19509-62.339814-3.312442-3.880377-5.709025-6.665817-6.813173-7.922437-36.456307-41.116443-71.570036-84.59877-104.380302-129.250736-5.385661-7.311523-10.728342-14.710027-16.071024-22.115694-19.086707-26.465768-38.822191-53.816696-60.920488-77.886905-0.936325-1.027399-3.63683-3.315512-6.262634-5.53711-13.547551-11.447726-30.388101-25.697265-23.397896-37.615713 6.492878-11.081383 14.107299-10.502192 18.058284-9.17394 5.904477 1.988284 10.097986 7.80271 13.449313 12.477172l0.861624 1.175779c48.930409 67.13298 102.19145 138.802276 159.886477 207.939913 31.18628 37.389562 57.130162 66.796312 81.598436 92.581582 1.772366 1.876744 7.2798 6.399757 13.609972 11.463076-0.596588-3.591805-1.01819-7.437389-1.228991-11.536754-0.877997-15.754822 0.340761-44.806485 18.165732-62.434981l8.550747-8.512884 4.937452 1.802042c11.818163 3.971451 16.284895-2.602268 24.563442-25.733081 5.385661-15.050788 11.496845-32.138978 26.207895-37.72623 22.203698-8.507768 37.550221-51.913347 48.742121-83.59286 4.607948-13.06455 8.600889-24.366967 12.679787-32.728402 3.046383-6.271844 7.670703-15.744589 15.57472-13.088086 2.181689 0.728594 3.928472 2.369977 4.934382 4.607948 4.828982 10.677177-6.771217 60.641125-9.337669 66.693981-2.367931 5.588275-0.707105 13.690814 1.059122 22.288632 1.49812 7.27673 3.047406 14.788821 2.307555 21.944801l-0.309038 2.968611c-1.428535 13.782911-1.473561 18.204617 1.131777 19.077497 3.227508 1.090844 9.894348 0.75213 19.825534-0.988514l7.537673-1.327228c16.007579-22.87908 40.337707-39.399335 62.025659-53.120848l4.222161-2.709715c89.226161-56.798611 89.997734-56.536644 94.336552-55.05899l1.497097 0.497327 1.12359 1.058099c5.638417 5.330402 2.851954 14.645558-3.058662 26.981515l-0.796132 1.570775c-10.591219 17.48728-4.811586 40.812521 2.777253 61.743226 5.711072 2.764973 10.717086 4.827959 15.553231 6.460132 9.694803 3.261277 18.742876 4.656043 27.628244 4.220115 4.056386-0.184195 8.634658-0.947582 13.481036-1.755993 10.392698-1.727341 22.160719-3.675716 32.378431-0.25378 7.355525 2.474354 13.057387 7.443529 16.903995 14.730493l3.52222 6.600325c5.212722 2.025123 10.391674 4.199649 15.559371 6.385431 8.378831 3.51915 17.064654 7.170307 25.659403 10.06217 9.201569 3.097548 17.441231 5.02648 25.207102 5.887081 5.919826 0.647753 24.691355-7.648191 35.901675-12.612249 17.423835-7.712659 23.716144-10.296507 28.628014-8.642844l1.352811 0.497327 0.87288 0.63445c2.925632 2.153036 4.424776 5.471618 4.093225 9.148357-1.562589 17.013489-53.518914 49.218982-54.05308 49.472761-22.010293 10.540054-48.226375 40.632419-61.734016 63.626109-5.950526 10.124592-6.260587 21.361517-0.8913 31.641651 2.993171 5.706979 3.429099 10.79588 1.320065 15.066137-3.499707 7.116071-12.152784 8.653077-19.796882 10.016121-3.00238 0.537236-6.106068 1.081635-8.061606 1.855254-15.495926 6.070252-30.94171 12.208043-46.400796 18.352997l-8.172123 3.238764 2.960425 14.539134c14.394848 6.912433 29.65439 11.961426 45.667086 15.106046 4.847401 0.943488 9.648754 2.228761 14.679327 3.924379 10.863419 3.65832 20.939915 8.634658 30.691 13.433964 8.129144 4.02364 16.522302 8.15882 25.27464 11.453866 1.919722 0.642636 7.764847 1.556449 13.437034 2.425236 9.385764 1.453095 21.064758 3.25002 28.756951 5.829775 0.013303 0.00614 0.031722 0.00614 0.063445 0.030699 2.930749 0.972141 11.695367 3.958148 11.846816 11.574616 0.151449 7.367805-7.694239 11.341303-15.374152 14.257725-18.391882 6.948249-34.629705 29.497824-28.842909 49.26503l0.226151 1.069355c1.180895 8.984628 11.378142 16.60519 21.25714 23.984251 13.358239 9.974166 28.507264 21.297049 23.500227 39.629579-5.509481 15.647375 10.82658 39.464827 16.705474 48.050366 2.121314 2.704598 4.25593 5.453199 6.383384 8.213056 9.211802 11.93175 18.729573 24.249287 29.820166 33.909297 3.317559 2.879584 9.528004 5.720282 15.525602 8.491395 10.249435 4.714372 20.847817 9.578146 25.418926 17.715477C1023.80506 519.306798 1023.528767 523.00912 1021.264191 525.720881z";

    var path1 = new Kinetic.Path({
        x: 0,
        y: 960 * scale,
        data: data,
        fillLinearGradientStartPoint: {
            x: 1024,
            y: 1024
        },
        fillLinearGradientEndPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientColorStops: [0, '#af6c31', 0.1, '#fbe08c', 0.2, '#881a19', 0.3, '#fbdf8b', 0.4, '#bb7119', 0.5, '#fade89', 0.6, '#ac662b', 0.7, '#f4d483', 0.8, '#9b4e21', 0.9, '#f4d483', 1, '#9b4e21'],
        scale: {
            x: scale,
            y: -scale
        }
    });

    var path2 = new Kinetic.Path({
        x: 0,
        y: 960 * scale,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 40,
        shadowBlur: 2,
        shadowColor: "#666666",
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        scale: {
            x: scale,
            y: -scale
        }
    });

    var path3 = new Kinetic.Path({
        x: 1024 * scale + 250,
        y: 960 * scale,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 10,
        fill: '#cfa74e',
        rotationDeg: -180,
        scale: {
            x: scale * 0.2,
            y: -scale * 0.2
        }
    });

    var path4 = new Kinetic.Path({
        x: 1024 * scale + 100,
        y: 960 * scale - 60,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 10,
        fill: '#cfa74e',
        rotationDeg: -90,
        scale: {
            x: scale * 0.3,
            y: -scale * 0.3
        }
    });

    var path5 = new Kinetic.Path({
        x: 1024 * scale + 50,
        y: 960 * scale - 40,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 10,
        fill: '#cfa74e',
        rotationDeg: 90,
        scale: {
            x: scale * 0.4,
            y: -scale * 0.4
        }
    });

    var path6 = new Kinetic.Path({
        x: 1024 * scale + 350,
        y: 960 * scale - 60,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 10,
        fill: '#cfa74e',
        rotationDeg: -180,
        scale: {
            x: scale * 0.1,
            y: -scale * 0.1
        }
    });

    var path7 = new Kinetic.Path({
        x: 1024 * scale + 350,
        y: 960 * scale,
        data: data,
        stroke: "#f8f0da",
        strokeWidth: 10,
        fill: '#cfa74e',
        rotationDeg: 90,
        scale: {
            x: scale * 0.2,
            y: scale * 0.2
        }
    });

    group.add(path2);
    group.add(path1);
    group.add(path);
    group.add(path3);
    group.add(path4);
    group.add(path5);
    group.add(path6);
    group.add(path7);
    group.add(shape1);
    group.add(shape2);
}

ImageDrawManager.prototype.group_item_40 = function(group, config) {
    var text = new Kinetic.Text({
        x: 75,
        y: 20,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#febf46'
    });

    var text1 = new Kinetic.Text({
        x: 20,
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 70,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        width: Math.max(text.getX() + text.getWidth(), text1.getWidth()) + 40,
        height: 200,
        fill: "#000",
        opacity: .44
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_41 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAEdCAMAAACopwLhAAADAFBMVEUAAAC5kGb27djt38Xn2L/379r379n379r37tn37tm1k23AmG+sglifcET379qogFb37tn379rj0rf37tn379r37tnSqH337tn379qieE2jeU7Trobeyq/27tn48Nv379rVroX379rQqYH27tjVr4jUrYX48Nukek/379qle1HUrISjeU7TqoKieE2ecUX27tmkelDt3cPUq4Lfx6j48Nuke1GjeU7TqYD68t6hdkvfxqbkz7LTqYDRpXvexKXewqC3lXC0kWushVyyjmenZACoZgKvcQ6ragapaASsbAetbgqxdBGvcAv58t327tm0eBazdhO6gR+2ehiubgi3fBq9hSSzdA25fhy6fBTAiSi4ehK9gBi1dg+ycgv48Nu8gyH38N28fha/hybUpkf27dfChh3CjCrSo0XDjSzEiB+2eBHPnz+/ghr689/JjyTGkjHXqkzPlivRoULHjSPSmS3HlDPGiiHOnD3LkSbKlzfEjy7Mmjv79eHBhBvJlTX38eDWqEnNkyjarlHFkC/LmTnds1b52n/csVPhuFvz0nj58+LftVjUnDD21Hn59OX169P73YLZrE7vzXPiul3313789+Txz3X+4Yftym/79+jz58/ow2flvmH00XP934TkvF/wyWmvaSHyzW7qxWnnwWXtxWTx5MjpvVrmv2PsyGz413rrwV/8+u3ktFDmuVWjeEz++eb//OrVnjPjuGTmvWjpwmzToU/Ijj/dsF3OmEfgtGDQnUvhr0rDiTvbrFnt27vsxnC5eC7WpVO0cCbLk0S/hDbr2LLYqFb+/fDuyXPn0K2+fjGkXgLeqkThvXapYiXRliXJjBz36cLXwaTjyqPw4b/my5aviWHq1Ke7m3ffwozpyYTEqIbJnVXCkkTapD3Jr47as2v54JXFlk/468rewJjPt5fXsnbRqWTato+3gC2fVQL546Lv1pvz14v///f35bTz3qnauoK6iUqrYxbMoGCvgUfowWCgVSDQqXC0d0ezeB/crU7El2q6dyWOOhOgBM2bAAAARHRSTlMACQj+/iT0+REb/hQe/u7+Pa3+4qJ//jC8oDAs/ZeMVv7QlWRgtMVTSWdOgHj37XK74T/i10Lgz+TMtsfj9Jt22LjVhNvSgbYAADjFSURB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'
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 215,
        height: 285
    });

    var text = new Kinetic.Text({
        y: (285 / 2) - 60,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 60,
        width: 215,
        align: "center",
        fill: '#fff'
    });

    group.add(image);
    group.add(text);

}

ImageDrawManager.prototype.group_item_42 = function(group, config) {

    var rect = new Kinetic.Rect({
        width: 800,
        height: 125,
        fill: "#faf2dd"
    });

    var rect1 = new Kinetic.Rect({
        y: 10,
        width: 800,
        height: 105,
        fillLinearGradientStartPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientEndPoint: {
            x: 800,
            y: 0
        },
        fillLinearGradientColorStops: [0, '#965c1c', 0.2, '#d29c32', 0.7, '#eccb73', 1, '#95591d']
    });

    var rect2 = new Kinetic.Rect({
        y: 20,
        width: 800,
        height: 85,
        fillLinearGradientStartPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientEndPoint: {
            x: 800,
            y: 0
        },
        fillLinearGradientColorStops: [0, '#c59752', 0.7, '#f6d77f', 1, '#dcb567']
    });

    var text = new Kinetic.Text({
        x: 40,
        y: 35,
        text: config.desc1.slice(0, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth() + text.getX() + 30,
        y: 35,
        text: config.desc1.slice(4, 8),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#a06726'
    });

    group.add(rect);
    group.add(rect1);
    group.add(rect2);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_43 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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'
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 123,
        height: 288
    });

    var text = new Kinetic.Text({
        y: 40,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        width: 123,
        align: "center",
        fill: '#5a3b06'
    });

    group.add(image);
    group.add(text);

}

ImageDrawManager.prototype.group_item_44 = function(group, config) {
    var text = new Kinetic.Text({
        x: 20,
        y: 20,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#febf46'
    });

    var text1 = new Kinetic.Text({
        x: 100,
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 70,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        width: Math.max(text1.getX() + text1.getWidth(), text.getWidth()) + 40,
        height: 200,
        fill: "#000",
        opacity: .44
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_45 = function(group, config) {


    var text1 = new Kinetic.Text({
        x: 40,
        y: 20,
        text: config.desc1.slice(0, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: text1.getX() + text1.getWidth() + 30,
        y: 20,
        text: config.desc1.slice(4, 8),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text3 = new Kinetic.Text({
        x: text2.getX() + text2.getWidth() + 40 + 20,
        y: 20,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#5a3b06'
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 800,
        height: 100,
        fill: "#000",
        opacity: .49
    });

    var rect1 = new Kinetic.Rect({
        x: text2.getX() + text2.getWidth() + 40,
        y: -20,
        width: text3.getWidth() + 40,
        height: 120,
        fillLinearGradientStartPoint: {
            x: 0,
            y: 0
        },
        fillLinearGradientEndPoint: {
            x: text3.getWidth() + 40,
            y: 0
        },
        fillLinearGradientColorStops: [0, '#fdbb45', 0.5, '#fffd5c', 1, '#fdbb45']
    });

    group.add(rect);
    group.add(rect1);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_46 = function(group, config) {

    var scale = 95 / 1024;
    //1017*683
    var path = new Kinetic.Path({
        x: 0,
        y: -5,
        data: 'M1019.39768 276.811882 913.501862 189.788899c-55.568596 161.710009-216.361723 278.887778-405.478941 278.887778-186.751335 0-345.787444-114.183576-403.28088-272.669146L4.428358 278.549455l-1.043772-2.738367 92.585675-250.375397c-0.085958-0.607844-0.434905-1.258667-0.434905-2.086521 0-0.913812 0.434905-1.474584 0.434905-2.258437l0-2.912329 0.433882 0c2.260483-33.42732 24.775266-60.07319 53.117778-60.07319l724.346269 0c27.90556 0 49.898457 25.645077 53.03182 58.246589l1.300622 0 92.413759 257.719666L1019.39768 276.811882zM273.927301 263.550857 200.466196 117.23956l-69.544913 57.225329c48.164976 147.757229 191.471846 256.562307 362.41003 262.483156l0-186.640818-96.65127-145.890718L273.927301 263.550857zM824.054667 116.284815l-47.292096 164.350139L627.057991 104.41651 524.107247 260.282417 524.107247 436.89688c172.678828-6.556323 317.067332-118.182656 363.082342-268.731464L824.054667 116.284815zM495.527328 523.134986c-8.305153-4.536316-13.843286-12.694113-13.843286-21.98778 0-14.170744 12.951987-25.733081 28.950356-25.733081 15.908318 0 28.774347 11.562337 28.774347 25.733081 0 9.3039-5.51255 17.469883-13.782911 22.002107 26.075889 6.65456 45.427632 30.259164 45.427632 58.456367 0 33.253358-27.123754 60.290131-60.418045 60.290131-33.732266 0-60.941977-27.03575-60.941977-60.290131C449.691397 553.384941 469.136262 529.767034 495.527328 523.134986z',
        fill: config.color1,
        scale: {
            x: scale,
            y: -scale
        }
    });

    var text = new Kinetic.Text({
        x: 10,
        y: 40,
        text: config.desc1,
        fontFamily: 'IMPACTR',
        fontSize: 70,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        x: text.getX() + text.getWidth(),
        y: 40 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: config.color1
    });


    var text2 = new Kinetic.Text({
        x: text1.getX() + text1.getWidth() + 20,
        y: 40 + 20,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: config.color1
    });

    var scale1 = 186 / 1024;
    //483*1024
    var path1 = new Kinetic.Path({
        x: text2.getX() + text2.getWidth() - 20,
        y: 1024 * scale1 - 50,
        data: 'M270.064939 812c161.273673 0 322.59338 0 483.869099 0 0-341.296506 0-682.702471 0-1024-155.171603 119.275267-328.0121 116.054929-483.869099 0C270.064939 129.297529 270.064939 470.703494 270.064939 812z',
        fill: config.color1,
        scale: {
            x: scale1,
            y: -scale1
        }
    });

    var text3 = new Kinetic.Text({
        x: text2.getX() + text2.getWidth() + 30,
        y: 40,
        text: config.desc3,
        fontFamily: 'LTCH',
        fontSize: 50,
        align: "center",
        width: 483 * scale1,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: text2.getX() + text2.getWidth() + (483 * scale1) + 40,
        height: 150,
        fill: "#fff",
        opacity: .49
    });

    var rect1 = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: text2.getX() + text2.getWidth() + (483 * scale1) + 40,
        height: 150,
        stroke: "#fff",
        strokeWidth: 4
    });

    group.add(path);
    group.add(rect);
    group.add(rect1);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(path1);
    group.add(text3);

}

ImageDrawManager.prototype.group_item_47 = function(group, config) {

    var text = new Kinetic.Text({
        text: config.desc1.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth(),
        text: config.desc1.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: config.color2
    });

    var text2 = new Kinetic.Text({
        y: text.getHeight() + 20,
        text: config.desc2.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: config.color2
    });

    var text3 = new Kinetic.Text({
        x: text2.getWidth(),
        y: text1.getHeight() + 20,
        text: config.desc2.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: 60,
        padding: 0,
        fill: config.color1
    });

    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_48 = function(group, config) {

    var text = new Kinetic.Text({
        x: 30,
        y: 10,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 30,
        fill: config.color2
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: text.getWidth() + text.getX() + 30,
        height: 50,
        fill: config.color3
    });

    var line = new Kinetic.Line({
        points: [27, 14, text.getWidth() + 35, 35],
        stroke: config.color4,
        strokeWidth: 4
    });

    var text2 = new Kinetic.Text({
        x: 10,
        y: rect.getHeight() + 15,
        text: config.desc2,
        fontFamily: 'IMPACTR',
        fontSize: 70,
        fill: config.color2
    });

    var text3 = new Kinetic.Text({
        x: text2.getX() + text2.getWidth(),
        y: rect.getHeight() + 15 + 30,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: config.color2
    });

    var text4 = new Kinetic.Text({
        x: text3.getX() + text3.getWidth() + 20,
        y: rect.getHeight() + 15 + 30,
        text: config.desc3,
        fontFamily: 'LTCH',
        fontSize: 40,
        padding: 0,
        fill: config.color3
    });

    var rect1 = new Kinetic.Rect({
        x: 0,
        y: rect.getHeight(),
        width: text2.getWidth() + text3.getWidth() + text4.getWidth() + 40,
        height: 100,
        fill: config.color1
    });

    group.add(rect);
    group.add(rect1);
    group.add(text);
    group.add(text2);
    group.add(text3);
    group.add(text4);
    group.add(line);

}

ImageDrawManager.prototype.group_item_49 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAFFCAMAAACuU0M/AAABTVBMVEUAAAD/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amr/amroAADmAADEAAD/amrGAADqAAD/b2/BAADjAADJAAD/cXHbAADOAADeAADYAADRAAD/bGz8Y2PgAADuHBzLAAD/aWn/dHTTAADVAADnBQX8XFz5Y2PqDw/pCQn4SUn+Zmb8X1/sFBTSHBzvHx/pCwv7VlbtFxf7WVn9YmK+AADxKyvwKCj3RkbyLy/zMjLtGhr6U1P0Nzf9ZGTrERH5UFD1Pj71Ojr1XFz5TU3sAADwJSXzXFz/dnbMDw/3Q0P/eXnvISHzNDTrDQ3pBQX2QEDKDg7UHBzqHBzwIiLeDw+8AADkHBzUDw//fX3bHBzwHBy6AAAo6FVPAAAAHnRSTlMAydoG7xXnIPdm/NWoi7hLm1ZBDTUv4MEosHORhMuTabnDAAA0XklEQVR42txXS88VIQxVf4Q7h+sgIK+IkwxRF8YYH1s3Ro0bEzU+ov7/pXAolLneT/c2fteZoRx6SmnLtVu3/zO5ee367f9MbjRKd+7+F3JnovTw3bvX74q87r+vy9+DInjqnx9MgkHokgo+FCEgRsIYgPB2GajIDATFAcFAfzfp+eNB6c7DTx/ff/z4/vuXIt+/18ciH79/ePTlPR7b4NNHZ8K6Re3Lh0ffP3ZdIDHQow9Pv5MekM6BnkL3IwE9+oBlgcRAvMhk0hnM21d3BqUnv76qaJMWQusUzMuX6mX5C7n8V5+/qi2kMgYRRehB+2xefn2pqs4J2vW56EIrWae+AiGGlYBemt1rRuoPZVGnChC0ol2/QnnNXkPZ76c2aKx7SUgnZ8u8o0nPXkyUvm5pWRZRZZEinNQJotpP9KINLl1kfxfWQWvMWK2Qi6BBvx2Aimd0nygJaQCnfSXl9QSJ0G3KOrYxUlHrnir+DFRWvX9vomREGyc12y2EHVZ0+7UNeY9xz9brajk+BkPrYC1fIYalunPCWIaRAPK2AQWbhru8U4r556NJ+wSknO+DIpFJoZg0U/rhZVUoCzVdGXj6rtuKwu/OtE/VXcbljqsjPkHs0nTLAnhKRnUkl8i6FJxZAQTHb7sl9yA8SHtviyZrtVjqU2TXhL6wjdvKJq0/Hg5K9z7Do3GtCwRgxRFH5O6wdRtGKK2uYQs2JeM9VOoGvlgs6ZNraqSu0B5A0E1tGd933IGHd9Uk5+uzNqS/kW7azUnNUF+fzJQ00OjkiKVTUiY1O3KdfUGMFRBLQR6KunaKBvXClAIpbqeLsoLxmKy2Ojd00pYpqUjbH8kzLC9BiQNPc4TkRQIMwPAd7LgscCEc0gNvH0BbWXkd3xEIV8Gwd4hTFNJzqJVFHCWNFoYBuH+h9GRbMicEo9Pa3Ywt4givh6hIGeZPYQ6ZMvfEYsWmmpsX3ksIgIAEYf+DE82dhkSmhwVB6C4BfT1QehlmJXox6Wy6Qe0qon2IiIPJcb5Z5/IE5IJi1sM1qp5CnwCUbAFS8ylZGidlQqfLL4qWMqNkbDuZlGw2nw6UeDoXBg9GW7fD2ZZuqY5o67qJDrsZePJRVMacvadoVKdlAAkfR7mhRKAY6CAbGFmuTn42SX++N1O6ENyB4ImQ75MHRD3rivMTlw4WHqUjppRBmjwipQigzsmfLiOtCYwwiowiD0j6/t8pqSgXCgIuBQfn0jEbASGFu8jI6Fr0MrlmH+UWMoq7USPFLjJcpmTfIMDJjV6emST+tUt7qvVNcZCjwwl7dC7uoe34Invqz7WQX6a0+aJne5XEtKWGfgWKwRPFkb2FFDqfLkrQYmTmKCRMqse6ImWrxRW7xLJGG9Q4Kyi3blUkqwv4KJOhnFZL6BWyBW+oXYIdAjmhyclkdBXDfbuPVwKZ3XctAdf4fQJy3/5FqWhN1Qm9nFLT4GZhCjix/pVAxAi93GkGQu8HTgz0L6S95fK4TrrqLImDaBuZDW9nAdMd3mZ8zt7zagw0IbUUZluZG3ZwZwyuwpHuJaTjOe+lUF1dar8aV3vZItbmuB0WtZL34oCv2v7JfHC5i8FaAIXdmdnlblmwF0fy3Eq+gXMgCKSYyaSQ4wFo1ZIzHwMdKH2ztVxxKtI2sgdMCbB+KGGyG5TBKazDDrPbxOkQNTkj0VPWFVJErpIuVsojJrnvKuguJDYJNTlM4erSIjqjwr2adFIHSvfuiz9kqqSnrN0ot5oGFWVvatt48FyokkKczt0XITXKvSKZZFcCwuBZ7UKWzIZ31QMU5RarpmDOOnG+sw4MgSsZxPR0zMO9hBvuX3l9BoKkvSv1nm4qt8kpHgI5y4PLEUkHM7ac+8Iu8XyXdI3+EKxPekBaQuAugK1OmzorPn3d5DsQKztS5B6BXTcIc1HHd91MstZrVs7EnO9nLN/mXbL7to6Tb2JIHQFxwYzqP40FqFfqoSno6ltvrAzkstcEZNkUYgQgSJxSCIo6HeeRjNYtWjgarpwZEXf9R0P06eXhwqr4XKBH5JuG0MVk08qs9CNUPF99CYirV07nuxqgbQvQtrfBbZzaHvOj4nAqjQgE7CqpO7rdbsaUQXFl28pnVHB7UMRRKYA4vYwmvbzIRoiz5Ay07r09aB/QfOpINd9yw4tUjh3l5MaC1rn1DD3H5rJueWlAuzj2eOpSpW7Nt+wXpiBBr2dviTMArq0n2K6q+sqEZkqfMHcKp7KIXWmz5cJt+blQ0ysXdJZ4LxOkHYP7eY+nFF9YFR9VKbjD9nIK+vwmDAMpGvjmC6S5EYhpqdZmWlxaxYlFaENpHIysueoOzbQR85grpgRmf86Uvq5uDz5pZKvpnhnBSW/NeGvYY446USfGTlLhi8GmpFPyoeQcNUzBVpJP/JwAfRwtLVwzgFy2ZFJ26yiS6OV7Z5/DBHRoWz/VKJUkZxfWyimtXDpIVsNJYwSkWqPVy8JAfjeK9G3bcEVALFvvu9AudUK13MouNZOOLqS1rGFYwfJpTuJCckGr5ISPfGjglCvEd0aQmMShWhfReVUTp5H5WdhQZrTZYsUMJJF9eugsvOEsfzZEC/y6lB+8oD1okSXpZP/rMm8s9WQdaAGr5IiTl5z5z8U1M+ktDyCJPW9Aeh+JoNLfzjHUgRJaqJD3fQ9WLw0ibcMp8gpLTKp2u57LwaH404YClG0SABrnw2i5XL7NI50uMpCeb86Q2leTcvBa0nV+Je26beEflFLeutHGwdvLuDsHceWNtZa4zOGAm+LQXbffhFtLjt0gELwJjmwZZD6ShQTrrJIjvAski5Em999mKBoKHDuPRX6My90YuqurSdbVuB4cz2RucSBGy7IZecgFM7xG/k3Eo1PD3meXfvwO87w5gNAOM6CfRqTChtL3ogtLciRrfRyGAQel71XVlcTPn711iYToOh00Rbx3gwRQj3aQLD2dxWdhC5+eg+x9OAFvBOT95pggls0AJtqQck7BRjNP6A106TGEKHv5IhUo2Xj5csfG7XEZiHSbn1egAFWTzH5xCdOxvIA+TVTeWO/0UpMOml7ZGk4ePaV3pMEnRW9rQ0mAEMtEjOb2aIeYJjEsSqeAgnYHUov7uHC82kUt1UF7YCE0NK6N4iaAoIJxCbXpYtnZqwMMx31UNK4FBkxAR1i5UzsBjPnUUuxL9EZhwMiE3EWkmRAVQripmk4OQbDkBE4eVliTVmoiJa/tNMV+jgVJnUESp+3rfBR/JAsTSG1ogLW3dbLbTGq9lzX0UidrVYFo0kxb90PSmUKaDRdOrzALY/T5NbBv5GcPO7MAJCNxmU0vDOPrJJC0BhCQAN4ZeFN4R5Mk0nV9X5IngfQyu/TLg99uWK/OvblY1Xhd9DCzFp4NwVZQizBHj8RR/MLo3WR5TEL0tcYUoGhTScl4falPLkq6PMDo3eTwrW6S0ydbTYo25PEsfYCOuBxs8MK9WTlX2Ho0UDbjNxxOcZamWAQl7YO1udYTqdt4qA2OuhRXAkH59brOaeoulZcfydrkVI3eVAXgpOqigAD9/DVzPKVyrUtiqUheedhH+BLxri6LWABcS+ghuEa3YqlXimkgngBSU/eZhUT9gmQ5oayHDgBCklRb7Cpm5WvBTEBXaVKjPOstZ9W+khdCEx+5A16wLWnvYRYKmxA3MFF21bbTPnKHsvakcbg/YZnIl62XvvLC9f/s4Xt+Oc5YpWz3CN9geIxy+9jW7CsSRsaxnpsnAaRiJRD7BITtgRVpZynxh/2m66Ot9I03Js3s4ZseGcvp6dGcJW0ouprPAZB9Sw2U53CDlVk/0SUI3pDNxUs2n8SnoA2tjvKsFMcTA0gAysHMLv20ZmTFRqLXFLMghCkZSMkkuRSAjJ0I1NDNYcyK+SRQSbPMALz9sYqzgrq2MhJvYrodTDo+njkeGw08YisUEQ61LSDLfJOOT8fETR7FYyGS1HYtmgXeF7obfiKAcieJY061N4awTY6NLuwBgx1WTD4XrFQVOl1CkLwCadsL1lvWyjDICj3UNMfxziWQTeW4I4QSaOdcTfo1evdAoNQWHuqODSGUaQ5I+qxISoncyNc+SB14iUos6S5A779SckvRSXhuebNqjfXGAaW5qNGAvQxS3kARDW3sDCDo71opkRtFoDlzfADKJw4aI9+iQeNFf392ieTOys6pdbs3Q/sSR2Jh/WLZ+LwRo0ML+JsIxATaTdJKkcaZgMl7oDUY6lZKnZDOO9Ln1SVyHTrFs0CBmB6fGwMIJ++A2NjHZm0z5Ersa3KSSONb5RvxbtRTr7ZWrF/D2irYcngY7mc7yE3aEaLo24CimYEsPHLmXyCcVfU61smbVUxC5Qu/eKgW9Ej3Z/bwGb3Ture8RLCVkYsleV43qrm9FKHoSyDnRyJmi+gldIkQnV4gRHBfJ89OmS5iNL0qS8nSt+Ptc2OT12dRzSCTssP68u27WH+4olFzU7rIneglhRIImZSN7CbMlr5TAfI9zSZZGpl0Wk0miRi9U3iy4ooJ6N8nc9d+ZmMUv7teksW8jgIxJgXR5HJeeU+ZzxPozKaXbnYUiDGZmpV2YCn9eSIhvHX+GFK/Arw0FvLtorZueBTzKIBpN7ewJz5lKXYku+gLICleKf0OIwChIpFD0lvkh1uTev+ZVQOBPieXULFGgzLTn4tATDFldczWJH9MfErWwZfzbGK0AdsHQPNd0jTflyb5I8kBi0y2mFSAoAT9uzoRP1wtQqqlSx+zGrtCfSFTYeSDyd6xnqgjCHRJtxOSsR60hWIjKw3n86HJvUkH4Wa+mBTzObEwxvKiwR+YfHPTy/je7CWLhUBM7o2VZ6GIyRsWIuveQvSq4UYcBOa8s86Ht3d5e7WyztpOLDYB157vCVGjB8oPUmWa5Ma1hdQ7Ofx6i59irFe8ALTbgcOnhXL47bBsZMsK8KKqcW9c4n5SmyxvXF5+vMGozT5UZc8lOF433XNzgzC9p86tk3qQw+eLHorN+bTh2bbmfy4bz8SQcira8jqZQhqXl0jXwyJg8KipoJSpU6JujmcH5cosY0Wkj66Xoas1AYlJdMrqsQHqRtE+T1/pG25/dJGaBaUf6sA1jHWm/OWQSEHaLTI1YlYwQ0ygbB6m+GdYDJEuId02k/SROpDIYbbruDTpc1SIqujbReqeZnfxKTzthASPEpXmZQJSNc2y9e7vccCtucd3UZorEhzDf/qYb17/vwuoRNcVe0bl0yvWpA8t1tyshtI8IlEYh0/Pi8O6mAovgfAnSbO8ef2m/YxMX1Xqpgsn/v8d9XL3hujX16Tv/1NBdOoOJGqkmFK21muJt0j+tUlnniW46N1aAwgqIOZxNXV75f3NV9I+RFOGTU7E+KPd+Smi73rrUnbL5kiPq9KcLIBi8BoyezfVv9T5EOqtK97uTeGtGyXbCCDrz7/sXVuu1DAM3QlBrdoqL6mq1G6lGwAJJNj/L/Wxk5N0CvN90fUHzJD01M7Dr8SDJZ9zPeWfffj3wot5YYvmhSlToLp4isK3Yvc107z0ZhYTZcZjoeP9lIzOjeFGprl9jQwYd+0OdfEvkX694MMxgUxviQ4gnRUKpQxyL76lXTO84f6CjNicd/eeRXp2iDhWdE370pqB48dMHo8pegq0SA9Izwey96Gh/ze68Az09vgZKxr2vsUUj3gGSRTYNkEFu78kvWZhMvSpHh8VafUpdw6qHzmSr+Nmdp/ObE4FKKbw6y6SRKxeAmKjY+RgMenLBKWEmc0QjtTP2548gn0QNnNgT1h1RarJaKpBcXk8+15AtNdDPN3eJdM6lm6eOAIVEPPCPnEhR9fHmayqNWLvXGRf98HsMYemqV3qgFbqpxwX+s1C9Ii3mCceY9+BepF+BNYCMa3BdDjHlIR/odvMYLACjet2d+7NhPaEvvPdTuysCGJeogr0ANSLtLmREwBXjLSxUGiOXi8q+VgyvzyAZxa0clq0N0+fC9AKoD0lBeJ5WhtxtiwdfYgwMqGd0g6W1r5U2MLDGKMDK55ThPHAgoRGmECIV1cmxqnLK9DsqL27U1/zZiclJKNnHYB2eRzQuG6NiNHpSfHUV8LZfRsINGi2laXCF2cLSoXhMu/18VGZZMlDWxgxlxz91MSZbanwGJt0IATyeXi6eQ0udaLoEHorFUaMtHThxYhbYwB6LhWWd7NUGIcQvHygHiMfvvkZjAlEJFhDlvvSXSo+wdcnoGk5zM8ITWY2lQpBzyuFU9Y3Mh3+l2xrPJu7+akpFcbYMRXAhQeyske6cZI/b0uFzcROMMVMhxOpESr1xWbXa/mWKCaWDiDGuAd68R62sS0VdutgBhSPH7c8dZ+jHlIr0zLPDde+5ETj7b60AYUGaMKmp0z+y9bWWqbOXcotSwK0LfdS4Sm12uYIvJHW5p43eA/OidHfmezuA9a+VLiPjacyIxlASJszGS3L/FYqTGXZh75FINQcA2iOaetLhTu3rVw9MDXMiLWzAj53gWDRkh3QQO1Fu7/xGLuY5Mk4Z8D6CLQ5pncg9doCzd/fZYiSStT5BH2JUgyU6clpfQxnN/8CxBTqEJ9vRjIVSaM5wBEh0vs8XrbbrUwQ2/vpV6FojgviwUnm+j06n8AwFIj3cKUzU1IkurSUN6w3oPci7Ssr97a5liflcNGeYEibZX3Itavwt4CVq1LdJeR8BCmnaCKWHb/BCD7H0MmiSebV4QEA6PDzO5Fg4hJXDt609blYvdFrvHo23mlJLGWBT9BGrAtysVy370qFbQj1GTG35PfnG5HQixLxHISnJpTpLTEtzy3IBLNjAPmOKBHuuk3/voE8NBHrAJK/xJB/UVMwdCSTj5ZFGqwRzxYgEIGWeOIW/vACFFYBGjMa7ImKxC+FRKIvcFk6pOlbJ9KWjxTjuqLYBznkyqM/RwkTJn2fET5PKu1hXfEQrikZ0IGAtbZmKUKQueiBVNoL6FzbgVmk5lhYkoPUnqVllrHxBAL1Iv30knQ7x4vkT3NxDWHzsinxBcflckvc4C+Zzi9p0Y5i+OSQDCgGZMloG/3j6q2TrSzvEFnb4jnGoCKV69KCUKgko+usUiIAIUhob03+vt5OgnTO5/I6lAqrQHt0djvLZMqujjqyxwZEJMkBLpWVOZlEwc8WsUgjRt4v1gYP/xUI0YB1WWKE+IhulaUU7tlWDm69XB1zQcAcwRSwcZuEzaupSMvGswcaZ/ANBhbl30N4vHPNJtNQ5K4jQ45MLCQG0MuAcBd8tLHbv3XZ1rEpFWYBUgzYQcZPdidH7awzV6U1YR1LhauQM+dS+FnHkUhihWuTSosXNCzNsghVqLSwt7jMDZD73pcKh6KjBsn8Fgbdwd0d8G8SmeLDafuL0CKALPkF/wRf+4jGIJJNpfdagKQRGsOAEIIrklzBWox30Tm+NmRqrqRTbUD9PXGqd9YwKUK0zS+RBo4PwsWpFwnGtTZh1LWxQrCGCY04YTUViu/xYjkcAioJwH5orkZmLXkkro3uKEt0Vzb2i6Ucx/HmPQwd1WzOFyq7IF/WzQw1CsZKi3a01NQL0rCDb7ji4Fu+usyEEsyAqnJdpj48A4WoQ+dNNSTR5RZ2DJet6mepPNdChKgyBX1hGjkvlxinrRcJl2D4VLMTiJ8XHfyyaYJDGtMaLzZj3WJ4X27l6T9mjI4tHZQKpwp0uJtIrffQbxGJkdV0jJk8HycMg0mE0ygOhgFx0Ye5lekYPYE2NxuD2scvNyAaWU6kjC2edew99KXCYiXthxnldhYVmYNMm45u3MhJsJEKGvBYixb9rxqw0l4LK+DXJjZybPClzBH1kWaPY2EpLLTXGOZoM5MGspTbEPBXFqNC60gzG+bqxsmQkZNlMaXBQZMlRnMrQOop2xiCY2PfgECbPtq0DyyYKkhaKtUoBW9AA6kvFW7Uu9qENav4kyo6b3PbUFmMjURDVtVHopkFz1A2T0AIuBqJtkiOqpndKBMm/A70UldbLTYNCfph7Z3H8EJk0yz5ZgrJxDIgSTdS/BPivyJlsJmLBXUnEfQvam9JiAmD4Q409ZUx4mF6TXdjwqnppuwuyx2B1hHWvwxfoHOB4ZyR705+dQDCAYo50NqbREV0zZHpch0aYYKlwmbJMcxqYi8B/ynS765UOKtPUnlNuMD1SFuObm+X+DjT3C5BzaxpWi0V3p6BFi0V1u15YiAiz9I2HIljiU/qf8jeIj2I9D2DjcbMttp7YaBBov1rLblLG4Hs0MRkwggsX/+OtC2UaJRIg0hIuWHGV1P4BLqLxFLhGz5smq29+nR/45lSYdVp//5N3GC2pviQ0dQDUZcPN6CqvZeWpX+VCrO9sCLQJ3Z+G7LmI6V0HHpTqbWXJ15XHieQaG/ZJ4GdLxIgIGkU2LAfTyyPO1AdtjOxs57W7gXI7rbSIcKLwgauzJibjmGgOTc1Ohpm1u1ND1erpGkcsZnRVk1ObIAcktGM5meoEAbRoUa+ohZt4VgjSoEJ9PPmEC2oy9VyIhv58jjKfy2KIkk8H6pQ2c3VOkUAlWhWUqgHF2LClZ6eGPlCi5p1qj+3lapFqkODn691N5j+d4iGw1VO1+JhFy9Hy1hvxGpge395in1n095baCPWL48kJrkoP5PNs9VbY6huSppfIFx/Hy/yTcWIc75XtumvXPMXokdk5ehaIBFGsjDA2qBICxkQ3zrvhkFXzIghDhMzozUAyJDupcIgZ/0yveGl8tGUCm8Z9k8HoHUd91EBXJGJu4R8OJYKI151hmR+BiNOsmQuCtN+INmHAEL1crqVCl+0Sqmwd7RImCKDZnkSTTJWkQWG5p+XvgF1Saq96Ytz3xCpuKgYHZ0o6vK4h3BEjce6kEdIXVkC3UqFJauBBtPeyeYZxgC1S69x5lQjX1d2lFddPtXL/1I8yogJpcIvQHYlDO3Jll02MwfKeEuw0NcrEC6K/N3U/pyZBZX7d9VhTuoZeWrZ3syiJJ9ZHi0VviCK9kZATlOsp743IHtrcveA1YUmq1ui82U9MVLH3W4XkVgqTL/USoU1xinpcD7ccWMl35Qpj65JHKGkhhKh3qETh2LVvEAcio97UOB0rsUB1KHZHljqvYdh3rnFhzXZHJ1tNp11uT7tjSXdNEe/K/M+NgHrYYxkp659BRoK0JFLHI6VSplQKswY2gW6SzgpoPdwAOnIYeq9h8Dnof3BEFj15fFBL16DRNcEDHnZ+JYhkVLh1r/m2QdOCkqCeAUQkKpJZsCqS4TeP1Atc17eZNljyVoqWakwRbr5iFV7jamaglW46JLduQ/CN/vWEIeWwXzwrgdS5WMyMQd2Zwmbk7oI5hZABekp6UXCYrYRY4KYVBLjJgXj9Sdi6MsE8d21ykUmmpBXyuhbu843oDeVMfihZv7vELCSd4Ih4c+usi75qVR4Kb+S9QyECofy2hGvfaWInCaa6AGQ+vql5F8Ixy5RG2DsnmWK6JBWGFH/SA6GzT6Pf4Na2dutz0AzzLgirQTqReLJxZ3sCX5+IPbg578BvUe6937H0huR3Jf/gD5F+gj0KdJHoE+RPgJ9ivQR6FOkj0CfIn0E+hTpI9CnSH/YM9MVt2EgAL+JB8FQ9GuWIIFNfOH4wHHi25gQnNTOj7z/I9Ry3G6v9KBlG5d8sMGbsdl8O9JopCyBp9ISeCotgafSEngqLYGn0hJ4Ki2Bp9ISeCotgafSEngqLYGn0hJ4Ki2Bp9ISeCotgafSwwDwfynBjdvl0pUmAzD3VtXWZw20YR8ALFkJRpleAy9EhWhHndjOB1iuEsA1sgbwbCQ2glhcYchk5cJSlUDLia+gN5DN4EsJVy6NAJapBNDgsTKh4ewTvAYz5Hx8d5lKMaHcgenQqxIZg15Lou0ilWCTSWIpeOxz7BJiTjwHWKKSJxCjErbEPieFw6i0X6bSFokb62+VdpwX6TIH3hVJZel6U0LO+XglAr2VvIYFKQHAxyvXkQzPUNpshEddbjFkxbCiY7heThEHgFcpyCXxSocMGUM/BdBjgdk6PEWr5Sy1YMadlbwvYf6tk5w3cOAMo2CSfY9ZNRo9VkMEI3djqU+cc3Tij0774iQvfYVUw/Sk7stj5T5Y23qum+COFLiRVKWAONvC7O82xdHxVYUDN48HiJ2dCY+yubh55Kr33H3jBArdkkwwBTo9zAG931oGhhqcI8TWHDYPs18CzVxrAFsiRtw+w8jnQu6+bg5nQWwGd/Aa1c0ghU0lGckYHmZXC+vEtsPdxkfGCKU19KtgeC0KtUBEstknsIOvkug6XAhZ6/AFczh9eyUwrSMxRIcRCcsi238hqvo5OLSSZhVCuiklugYfi4k+MgQhF+PbK+96Y7VaBa677k1z0PVV9PZKHsNp3hf72oeNIdUnlwnMy8/sMb76yQtOl84lD3TQgvN213RW5RuOPTsjV+CI6iUKx/AzKxP05koxZ4xEa2RghtvYRqYQ5ZSIPpSzERbpuwTzfUGMpGS1rlvH42nkKKVEnJUYKXCCczlylIz9AyWiUwVllDeERGyCgknJmw27vYPv0zAyIcTRV+Ax0V1HOEaYtVbStQXy0eGl2yvyvLlcuqStstBwHPsfKHmIVm15WyE5mxEy1CelA8Nbzt51R1TJaZhE9QbyGFIvKM1hapK8i8NsawVfoA3m2g3GvL6tEmgrizP3XcI+IRhK2wPtsyxxa8xS4TDkR+di0CSdmTBzK/UH76tjPJh45755eXgvOLF6G46vM1yS780lbRNKwQRFJBHr8pBHp927eEoTfwngq8//IOvSniNjROyTEMmoOW+mrq0/eDDGBYXBVXDHHQ2NY+J1071or+ARz8RhbaNgk9NH0HKn2VHGnSHtQE8kYQa9oN2oqVXIb/eOisFjKnl8NhF0q8OncAMA5c6K5Ik7nQtmI0hUDqcsBQhCNPy5gLTDQypppUA2wUWBhJwyD/pdW3Bpt7vA1EGD/RgdRfDoHBob7cCscDRCOsBjfhkDO+SqcyAr6BsR7suxt7Ylj5JDr0/zHQIHGTn9uvKtNuKcXdchMYaYwy8qpW9d8eCaFUV4CdRlb6aXiKNz8UzVxL12RGSXMOi6bm4rYvbUE8W/YqSWps3OfuuGCLS+H1SB08u9j9ypvQHgs6iFjFg+6P0hPvcADakcZSb83EbvV/sktNnI2++XRsxrqw56zrPPq1IrEffQd4JLbjcbqKfzk7ulYe7PN8G2zl6Ic6S/oAQzv/GA7r43uLC25jePAeRG1MHamLYYeKw24CNDZw13/rBm9u4htwzG5bx4/wWldVBu9EH/RSuVoHMi0N+XAHDvpKuVgk0cazgQw9CEb/+H+sZNt7kVCi4lEhOC/S2lQ2J1tWXVsVoyfy5Uxj7anff9ewH61EvXHrIbAkWpRRwT+FxGM9fBavu+qxw22nBkQumoH0Iu8c+VBteL824cyHbiAfxEyM0jbuzXd+6DYefbxMLwdQjJGDosArj56Ov0HL+/tH4kUCobUjrKhlDZkW20rU1/Zy5p5eEieOLCj+ZxUBfSVzNIu2N0UUMIVRuoli+hlHagXw+gkuoeGku58FlGxcUnG+ZkSb713L+3UYcR1zoVMcC9+Kpjd4UUoO0lCnYbQi8GkRy10IpvZ6srSw0zrlwmkdt9k40w2nrnBRsdRv7qcQqAHqO86PDdmGfRKbwrpIDSuVUFzikKAgOTiile2hS02FaT5hWVHJUbo222aWlqMPH3GyIA7wMxV7bbuA1F006n+47uG0HgwuATXYMEKGiFVmixZFsWBEHwkhhoX+b/32vSSj1ObEttPdPzMONEEa3Dc3nv4aWT+bq8R88FdGu6tmPv6lpDzSEN07Km0b0XFUKZIwok2qAtp/gISQfGZRUHesfmzXk8FNitf1pEDMOQClnTe4R6/B9XSU7TRUjtEMJJhgmWIJru+QR3AEKwlk4n94rNG++Jq4OgcPF6FZnNbcqt6mmWQ+f6LEoBa5NHFAgBhi27E2WGZuoiAFj+LnGMC3UQ3Z6ScsLEv0evc8Th7P4Jn2l5ZkM3oVQ9P2aUVklaUIiFCYpJiRogAHN/2SweLtY/JJz7m1PqWiLFw2ucjIV45nsajGPx5EbV6sYQxialkY7QhJJGpAdKvnDn2i5ZKHdxCSI3obr9WhLevZFRYgp0OcaUdqmVOk+uoIlFMJ+NXIzlLj2fc0tj+EDpwXAUncsQQYpJa3vBDSmpjlZqzzWTUaj6cgHSd/5sgdDJ9zYagJYVwDKBUK4RCz+2xXsc5L4Q7xgHmK+MPkr/zGOLLW25XMEYcIKeD/Xk68D0T70RQlPAwJlFofLiEGzXjZQjZ5sep7Wo5pxDtHRQX+AhEfzZOENZoYwQpjEauxZw20EnPNBv+sOzghWHfnYsVmqXziD8I2EAJazXvmdogDGBJUJXBZ/ailCAejMeMnYWDyfI6PfY3VkkppnGk0lUsLZ8QK/DTf168vwNqiiMjb/3pVWLGamFzgBaake0LGQKnFcCXfFhXuzzlo93gZy/Xko7zk39flma8W+ol5EqlTzeWNRizWoNS2eSzapqlm2c/SOl61drzXgejU7KyoXauLv3RsGlFTV9No0tO8i1tXR59eRi0kYPQTIraNtaq4ki1EcJ6XNSCD2UzncrUG9u2HFZ+914zFnuWARrY5CQjn/mOpMU1gE698nBTPqKph7nnkaY7B+R6LdRGD14ofwSVpfLUKa2TGswu/1XP6UJIzNUvGqB8bnTS0nsWrmU56UG9gOataRdt3twTgBgbib6pHQuZaCmtDidGH63m2Xp0sJ+qF5DcUmivKYEgJPiTwOhgYboQeNLl5tVCBRc1J8dDg0DwGSGkFcT26y22yr1LcKlWOHUQRdceskAKM7QrqOEgaqBOudwYSsSEYqBd264l1Jn1DfMKiohAq1leT+lhdbKpUB5KeTKD/QHldkNJ0nnhChSD+g5IcdkQOVtBXIZdJyOvptUZ+dBN6lMhqxSbriXElqUOwOp66H2gNCD+Sod0JFGE40DELwynkaW8JoaA6XU3yD0NOdZQJUu5Z8IzUgnjYU7UOacFVaTElEzGNZAVm5rPpN5Cj044h4tbN8b1P65z1JzFpyPkyClFANenYwkEu1AiJmuQLLWzgkAsGWukc6ET8+VyykDTCFsfkPDKKkHyNLa3OaGEKU1WUyNgcVW4dK1xpYrRHMROkYPyEgDLM8ouxZRtlrNHHVoAUCBbc+M5K0AMFiVgQa3+buH0zOznGXAZyOEbtJkvdckJzoT6DDXTUTUZqI8huOhEWQY+38ysyilw3le0gtCgZa5vNRH6TnypT/G6WRhoBtAeAVV6aPWVQ95KSUCCBN0ikWl2bNAjEboLFybUxJl6Dx6KCk4mWmrWumh/wBj4U7NMYE9MG61CUJOySkDEs3EM+pNOm+hTBbi3LzEjAM1F2gYpUvQ41Qb20W63fwLXsJzJnFVjvmrV3zur5YayModNxrHKmWd1ULPClgzs3nGSlTASRgjNJDSZYzEZJr6YysKzSpxA91QAbJx9avK6IEbz9JiDGtJp1hlrre/awmEAZVVhUfZ5Td0l3a7tsw4EK9TTQnHK310A0oKQp4RhGPKbDusd9tliJlfuZ44vudvQnj6Iphsmni7TMvQxnsya2L56SzJ/xZ4SgmjlFFS5uga9GY1btesnG0WHc/c51yTS+9WlDrl+bqdhxElfL3eu2uq+WVd12Zq1nsUfqhFFgYuL3HCrcKsHhuhRySMMAaw7I/iRbNS59LmrHEESuy17FHfmNLEjCyNTIWeu0m2XZqFNrdUV5pwBUIonkdaYa6mOwuTUhdo9Dx1NRbnsBWDplB3K5+u1yQqa2ttZQLdmFLCOJ8Zhd8NLITn6frCCYKJqzAJAmeh654hxKjBFDRhLPQzFWDj+wkaDM9plgUjZO3nCN2YkjMnlJhJuB4yw8G8XdciZWOtTp79uPFPK90m4sdIHUppwAwsuVVGnFAS9j9RM3F9U0e7uUUAzP9aq+M5n3cTM5zS3O2P6xComU+XBWVOr6D2diRz4dLPbaBkhv4DVDXyAzQIkzlg/Ovd59ILJ/0xbVFKzWamAe4df/rKVJNajH+bYMp9ffjzGwvjVA8jbSEdWuQTBhh/f/eldI9VP6W5tJ0EKER634+Wa+tP6T1p5ImUQxQMTQVxbVt2dVJfizXboqFQn4798u4juXsseuNd+HA4fuOm6CsoNoCdNSmFyEAzTuyhlDamxgjnrwWqo62j5mCt9H6pRCk3Wh/d/fChjLwG9WHL1QEpgNu7lCJgQAinNETCJLw20GAEK0ZsA3XIo7Wfj9RJb2gX075xGhl3H39792K/mDCvRa+fLjihwAcsdu/Q7GGMVMixWjqwCjnZapcYo5jSx/l1rbbWDzmvJcD5SlwXqeZ4v5Re3N191e2J+6Cbc4q1qUD9graU7UHmOlq9osOWgsgiaUB8d7Tj3R0b1q6E1GgKHDPGaE9imqp9/1d3d3cv92mcDUl6aJI0g5KXYbackNZKUANDncKUyMemnDWLLlk1tN2/CITIKGFYIe9Jdwzjd17e7fHFxxgzwjJ0Mxhb39bSCRJJ4g2MOosfsg9YsbZUjKDdImMV1aYFB0bUvhYhGVPEv7iTePHZoSOYOuhm8By1gxNoIDKOFYCvgU5l1FEej5yCEAK004hMr0zJCgPe4+cXdwovf1Sjgb3b3KP/B7MDJZgvs6rOEXIxj1FjE9oxBcrgYvW43+xsUIx+lGGn8MHn3Y3MLjbo/0CsKFHmCiVtzvaMdJtgBUqrjUZ840I1K2zWNZw//0Cy6XT6srsZ5J1vHbkIGDyWcRF4TsRj6f0PGjHC/hilMF9c8AAEOi2/PDKS6+mj9z/uSG3R24ZYxSjlklIqkF7QKKKyabKi3TxHWrqMKKnOVwx6+LGP3//oxd0pPvjs/Q9V9NkOessQfnj4sCRonlxVQDO5vLpnBchGS04ZFOddv4q5D9//TEr0FC8/+nFPipIdessQIZmN9JICJVuRYJXyjNVjODE283ZAMQ3PpQd5BX/440eS0Fn8rLLOBL1diJpbyQhtVj5gB5m82jOqW8WIkihvxpbK4eaFHZI035fxwfsYYxnRbxdbDniZ685yvhO5ZaqkftAoCgux0NYECDm39RZyCeL3pUQX8ZOUCb+5RG544px9tFvCgYKdjAxbM/52vpg2aBeWEJpFkf6BnsNlUqSf7q7h5SddLn0jmFRlYWaeanXmjnjt0TQKVKt0hFIss1MQdbYu1tM14RUSxtmITSXzd19eY6R8OQP6ZmSaMa7cdiA3e2O7jsVRpyRWziUhyWF/0jLGgIAVKid06SADA5N7vut4+SvGrH0jMk05UXsEHi4tToBwWIqnEcjSzlbTNW9ZFa4JZty64MCFKUX6VYrUJxMG+gaS3kI6agUAwEz9HuDTsm6Ove5VU/qpixyf85bPLpkOCrhfpG771K5uL1PG8RMw/qSsb2jzJJHosZkm4pLp4HKD9EEvJdVfARagW2NFOo2kvabqJSXJyTNqZwJeXJxch/WL1NUmKROvbi5TCooF7FyfMhsrnEbeNnL+Uc9SifRDP6OuNo11dGPMiGIE7mhFYs8kitIUHbHQMvQPoEddTRqAbz/p5u+2cBilrIrH4TKCRJj8WVE3/1n3fCpH+OTbu0H4TBly48YJb2lhiIKR2XIKVkgZw4wX3mvGIvlHgWFoUqTP7obhm+9kfcvQLbEZcxl2dTUn2kwjxJ5klNJx9q+XbEyku/v6biDkHhe0h55pciZJ3OT6oIcKLOVwLN6y1BnlPpT7bwGD5zVH6PmfceI6PUHyEHYWfCC+loYc4quEknoMhADWVpsBIVqr3GBuTD53RrJHx+qCKu+Vnw67WYUYCKHjOrk6bCIZvffFYEovPlUyXZn/vJTWWTUrOK17vYY+VrUo+z3jPENotALgXFXbdidOjoMxJ4dxOVw7dBdKpE9f3A3GF+9dlym3ZY+423QCt3oOO0cuo1KlcDnnfKfrngb+Zgny7tcPFcXU4vD3sJSP8x6RvhrO6ND7pxdl8rRTc0PI7jqnAyUMPPRp5Ic+JqvRhFBJSfP+ZrQDcuqXNO+qSJ8fRRos0/RqI/EIBnwp+ssiBt8ItPWac8zGO1+yZMejLbEkwPAJLhrW7LiShsskG7BwYZaEBo92DR45QXbdDRGsBgw2lmZazM0jQp9YogwAnwx7OU48jR5FGp70lEzV+ZWEFYCGRQSP7cPrvbJF1zkdM+yOTOYJDTovvvi7e0W6bj5ERUjh2llFpUTqatJwqKR3foHGgFXZzA3Di1VLtN9B5RoBAIqBbgMfQr+7ydqgDttONjrPPMPIazVX57UPopN0Nxg/KJnM82dT8lK3pZpY3VouPXQN3rT2C412v9cr/8eU1QHqYJT8IJLldpsh9SZnF5OpRDq6u8H45WMZW9mFDAqafoyC55HXm1coy3J3cRKZDL8e614IF+pIjOWR7AV319sswkRzzm25KYbl0WF35yjBEGNGHymN9dHpR3QAKziowxIwtRbnWsZEWvCX/4KSOh3EZxtgSyKbvB0eNDqYUvfrs2dCOnj8I16PznKU/dXN2fUmCkRheFRUsPhRQLDaTUMyIVyxMZJotECssam7FFdtml7VZJP+/7+wcGZG24r9ALvBvrcSDg8czrxzxkHHcb3sPhTPyilKpMa+henRvWnfvUIyB4uPNCCwSfvCr27AcAqw1mCDNLft5WjfIrOIkqmsRu+IM465VSsnGDE+F8bMd//ewDyPGQpPu7sNLEC63pw2cFYxZxyDpVfLKKFOK2BLvLii7G8GlG0R/4i6f5eT+/Vwty9OzRB7egs/bgDxBnYP0i6pCh242MnQeDOXyNcZuun64rekzfemCzGGE5suMidWUSNM3htMS6yn76ND5pEtS28QeYRIK6IUap6QV/9xL1OXbmeBI1LIGNMyPt5/xMDUSQsllSSVVOh134gN059gup6VVszaTvZEulj/gQNUCaVUnTBZQfy7EvoWQIJ6m0qjpcn2BsfpaWlhIKqj1JLyxB/3Lp927tzoF3XiWH9Im3jwFUOI9Otq51y3lz0SKS+hA6il6fSyg9/Di2fR6KYqkH1/mPIATINZ/3nGDW8CiqtrLXQQyVWOQmEnWM1uF6H7v1qM76YEiBP5KDNnRrqHFOUVL3IU6m5MotzOVoGDKRDXkdGhVM/x2+9iWM5P1/3ZY3NPrl2oQV8kVRd9OIlcgSYLHF3TwL0oimOZNEzIm6ujA0punwAUyLIwtljGlYSQOPrNXqVBWtnUjArqbhQAOmnL6LAqtrWSviPuTImARbixN0bitLshZjS6aOWM241T0tpFdHgV6h0tz+tbVfIiNVvNEniix6REj/D/wFKTWksxX9G34lWtUy+gL5KsCFWxljsJlas12gpiEnhi2o2ExiEi4gXEpLQbLIpYFSQZfbGK5aaiNMvyC9YOTNb/PBhJih0Q6Y2XZyRRkqdbes4a8eP+hfFJoAvfgZpWK6KMqZwjI9elZ3yKyIMN57AynjmVNTJKuuBwPwjU911sUVuQQRXPWBPWHxnGB3iMkc/aqmcZfEbEOFXIGGm5K+99JG/lWmQsrVRllFEVTsG1E9/efW+zpMM8r3paQNlVucEzKCvYv9utPwssBsQ3Mpp0G0kbP4Px9PdV/NarKcYbRyWh7EsS1Qqz7a7PZljb2Y/vMnNdUcVjAIrUOv/BUyj7er0AKAq0WF/bJs24H+eZrNx7VBRqNP9M+3ruMShvHgH1IONqQubswrvVT4TJSC+EcudgKRZzlwGVxExXuf2TkcYGauAPr/yBaVOgRv0YgQBK6jAoPAkwe0Id6ViBQEqVQFnYtAhQVTlqoFAFBfpLVNzxAwFUE6AAqPkdgACqdV4KU+689V2AKNR/A/oHIYvHWa6IcFQAAAAASUVORK5CYII='
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 210,
        height: 325
    });

    var text = new Kinetic.Text({
        y: 40,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 40 + 40,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((210 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY() + 40,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 60,
        width: 210,
        align: "center",
        fill: '#760303'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);

}

ImageDrawManager.prototype.group_item_50 = function(group, config) {
    var text = new Kinetic.Text({
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: config.color1
    });

    var text1 = new Kinetic.Text({
        x: text.getWidth() / 2,
        y: text.getHeight() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: config.color2
    });

    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_51 = function(group, config) {
    var path = new Kinetic.Path({
        data: 'm150,85l-137.935,0c-6.664,0 -12.065,-5.373 -12.065,-12l0,-61c0,-6.627 5.401,-12 12.065,-12l137.935,0l0,85z',
        fill: '#ff0000'
    });

    var path1 = new Kinetic.Path({
        x: 150,
        data: 'm0,85l229.892,0c11.106,0 20.108,-5.373 20.108,-12l0,-61c0,-6.627 -9.002,-12 -20.108,-12l-229.892,0l0,85z',
        fill: '#000'
    });

    var line = new Kinetic.Rect({
        x: 150,
        y: 0,
        width: 2,
        height: 85,
        fillLinearGradientStartPoint: {
            x: 150,
            y: 0
        },
        fillLinearGradientEndPoint: {
            x: 150,
            y: 85
        },
        fillLinearGradientColorStops: [0, '#2a2d14', 0.7, '#697c81', 1, '#2a2d14']
    });

    var text = new Kinetic.Text({
        y: 20,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 45,
        width: 150,
        align: 'center',
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: 150,
        y: 20,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 45,
        width: 250,
        align: 'center',
        fill: '#fff'
    });

    group.add(path);
    group.add(path1);
    group.add(line);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_52 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 375,
        height: 65,
        fill: '#000',
        opacity: .5
    });

    var text = new Kinetic.Text({
        y: 15,
        text: config.desc1.slice(0, 4),
        fontFamily: 'LTCH',
        fontSize: 40,
        width: 375 / 2,
        align: 'center',
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getX() + text.getWidth(),
        y: 15,
        text: config.desc1.slice(4, 6),
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#ff0000'
    });

    var text2 = new Kinetic.Text({
        x: text1.getX() + text1.getWidth(),
        y: 15,
        text: config.desc1.slice(6, 8),
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#fff'
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_53 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 222,
        height: 146,
        fill: '#fff',
        opacity: .5
    });

    var rect1 = new Kinetic.Rect({
        width: 222,
        height: 146,
        stroke: '#ff0000',
        strokeWidth: 5
    });


    var text = new Kinetic.Text({
        x: 20,
        y: 20,
        text: config.desc1.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#ff0000'
    });

    var text1 = new Kinetic.Text({
        x: text.getX() + text.getWidth(),
        y: 20,
        text: config.desc1.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#000'
    });

    var text2 = new Kinetic.Text({
        x: text.getX(),
        y: text.getHeight() + text.getY() + 20,
        text: config.desc2.slice(0, 2),
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#000'
    });

    var text3 = new Kinetic.Text({
        x: text2.getX() + text2.getWidth(),
        y: text.getHeight() + text.getY() + 20,
        text: config.desc2.slice(2, 4),
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#ff0000'
    });

    group.add(rect);
    group.add(rect1);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}


ImageDrawManager.prototype.group_item_54 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 515,
        height: 146,
        fill: '#fff',
        opacity: .5
    });

    var text = new Kinetic.Text({
        x: 20,
        y: 38,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 70,
        fill: '#ff0000'
    });

    var path1 = new Kinetic.Path({
        x: 300,
        y: -12,
        data: 'm229.83299,159.339l-230,0l113,-159l117,0l0,159z',
        fill: '#ff0000'
    });

    var text1 = new Kinetic.Text({
        x: 370,
        y: 45,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 65,
        width: 160,
        align: 'center',
        fill: '#fff'
    });

    group.add(rect);
    group.add(text);
    group.add(path1);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_55 = function(group, config) {


    var path = new Kinetic.Path({
        data: 'm171.112,1.549c1.286,84.999 6.209,140.05902 -55,165c-12.804,5.21701 -35.738,8.79901 -53,4c-11.67,-3.245 -23.351,-9.284 -32,-16c-51.926,-40.31799 -34.702,-124.124 21,-147c28.398,-11.662 81.034,-6.455 119,-6z',
        fill: '#ff0000',
        stroke: '#b43d3d',
        strokeWidth: 3
    });

    var text = new Kinetic.Text({
        y: 40,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 40,
        text: '¥',
        fontFamily: '微软雅黑',
        fontSize: 30,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text1.setX((170 - total_width)/2);
    text.setX(text1.getX()+text1.getWidth());

    var text2 = new Kinetic.Text({
        y: 40+50+10,
        text: config.desc2,
        fontFamily: 'LTH',
        width:170,
        align:'center',
        fontSize: 35,
        fill: '#fff'
    });

    group.add(path);
    group.add(text);
    group.add(text1);
    group.add(text2);

}

ImageDrawManager.prototype.group_item_56 = function(group, config) {
    var text1 = new Kinetic.Text({
        x: 60,
        y: 10,
        text: config.desc1.slice(0, 4),
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: text1.getX() + text1.getWidth() + 30,
        y: 10,
        text: config.desc1.slice(4, 6),
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: config.color1
    });

    var text3 = new Kinetic.Text({
        x: text2.getX() + text2.getWidth(),
        y: 10,
        text: config.desc1.slice(6, 8),
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 800,
        height: 100,
        fill: "#000",
        opacity: .49
    });

    group.add(rect);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_57 = function(group, config) {
    var text1 = new Kinetic.Text({
        x: 20,
        y: 25,
        text: config.desc1.slice(0,4),
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: text1.getX() + text1.getWidth() + 30,
        y: 25,
        text: config.desc1.slice(4,8),
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 800,
        height: 100,
        fill: "#000",
        opacity: .49
    });

    group.add(rect);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_58 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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'
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 254,
        height: 248
    });


    var text = new Kinetic.Text({
        y: 60,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 70,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 60 + 30,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((254 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        x:-30,
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 40,
        width: 254,
        align: "center",
        fill: '#fff'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_59 = function(group, config) {
    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 169,
        height: 351,
        fill: "#000",
        opacity: .53
    });

    var text = new Kinetic.Text({
        x:70,
        y: 40,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 70,
        width:80,
        align:'center',
        fill: '#f00'
    });

    var text1 = new Kinetic.Text({
        x:60,
        y:10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 50,
        rotationDeg:90,
        fill: '#fff',
        opacity: .53
    });


    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_60 = function(group, config) {
    var hexagon = new Kinetic.RegularPolygon({
        x: 106*2,
        y: 65*2,
        sides: 3,
        radius: 122,
        fill: '#000',
        opacity: .53
    });

    var hexagon1 = new Kinetic.RegularPolygon({
        x: 110*2,
        y: 65*2,
        sides: 3,
        radius: 80,
        fill: '#fff'
    });

    var text3 = new Kinetic.Text({
        x:110*2-10,
        y: 65*2-40,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 40,
        fill: '#f00'
    });

    var text4 = new Kinetic.Text({
        x:110*2-107,
        y: 65*2,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 40,
        width:214,
        align:'center',
        fill: '#f00'
    });

    var hexagon2 = new Kinetic.RegularPolygon({
        x: 106,
        y: 65,
        sides: 3,
        radius: 122,
        fill: '#000',
        rotationDeg:-60,
        opacity: .53
    });

    var hexagon3 = new Kinetic.RegularPolygon({
        x: 110,
        y: 65,
        sides: 3,
        radius: 80,
        rotationDeg:-60,
        fill: '#f00'
    });

    var text5 = new Kinetic.Text({
        x:0,
        y:40,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 35,
        width:214,
        align:'center',
        fill: '#fff'
    });

    group.add(hexagon);
    group.add(hexagon1);
    group.add(text3);
    group.add(text4);
    group.add(hexagon2);
    group.add(hexagon3);
    group.add(text5);

}

ImageDrawManager.prototype.group_item_61 = function(group, config) {
    var path1 = new Kinetic.Path({
        data: 'm0,0L191,0L191,155z',
        fill: '#ff7e00'
    });

    var text = new Kinetic.Text({
        x:35,
        y:20,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 40,
        width:191,
        align:'center',
        fill: '#fff'
    });

    group.add(path1);
    group.add(text);
}

ImageDrawManager.prototype.group_item_62 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 235,
        height: 234
    });

    var text = new Kinetic.Text({
        y: 60,
        text: config.desc1,
        fontFamily: 'IMPACTR',
        fontSize: 60,
        fill: '#000'
    });

    var text1 = new Kinetic.Text({
        y: 60 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#000'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((235 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 40,
        width: 235,
        align: "center",
        fill: '#000'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_63 = function(group, config) {
    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 275,
        height: 68,
        fill: "#003e7e"
    });

    var text = new Kinetic.Text({
        y: 10,
        text: config.desc1,
        fontFamily: 'LTCH',
        width:275,
        align:'center',
        fontSize: 50,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x:80,
        y: 78,
        text: config.desc2.slice(0,2),
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: text1.getX()+text1.getWidth(),
        y: 78,
        text: config.desc2.slice(2,4),
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#000'
    });

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: -10,
        y: text2.getY()+text2.getHeight()+20,
        image: imageObj,
        width: 281,
        height: 48
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(image);
}

ImageDrawManager.prototype.group_item_64 = function(group, config) {

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 397,
        height: 106
    });


    var text = new Kinetic.Text({
        y: 28,
        text: config.desc1,
        fontFamily: 'LTCH',
        width:275,
        align:'center',
        fontSize: 50,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x:text.getX()+text.getWidth(),
        y: 28,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_65 = function(group, config) {

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 279,
        height: 219
    });

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'IMPACTR',
        fontSize: 60,
        fill: '#85000a'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#85000a'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((279 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY() + 20,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 35,
        width: 279,
        align: "center",
        fill: '#fff'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_66 = function(group, config) {

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 500,
        height: 125,
        fill: "#85000a",
        opacity:.56
    });

    var text = new Kinetic.Text({
        x: 20,
        y: (125-55)/2,
        text: config.desc1.slice(0,4),
        fontFamily: 'LTCH',
        fontSize: 55,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth()+20,
        y: (125-55)/2,
        text: config.desc1.slice(4,8),
        fontFamily: 'LTCH',
        fontSize: 55,
        fill: '#fff'
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_67 = function(group, config) {

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 800,
        height: 125,
        fill: "#85000a"
    });

    var text = new Kinetic.Text({
        x: 20,
        y: (125-80)/2,
        text: config.desc1.slice(0,Math.ceil(config.desc1.length/2)),
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth()+20,
        y: (125-80)/2,
        text: config.desc1.slice(Math.ceil(config.desc1.length/2),config.desc1.length),
        fontFamily: 'LTCH',
        fontSize: 80,
        fill: '#000'
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_68 = function(group, config) {

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 260,
        height: 199
    });

    var text = new Kinetic.Text({
        y: 75,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 75,
        width:260,
        align:'center',
        fill: '#003e7e'
    });


    group.add(image);
    group.add(text);
}

ImageDrawManager.prototype.group_item_69 = function(group, config) {
    var path = new Kinetic.Path({
        data: 'm0,0L548,0L494,55L548,110L0,110L0,0z',
        fillLinearGradientStartPoint: {x:0, y:0},
        fillLinearGradientEndPoint: {x:548,y:0},
        fillLinearGradientColorStops: [0, '#ff0000',0.15,'#ff00ff',0.33, '#0000ff',0.49,'#00ffff',0.67,'#00ff00',0.84,'#ffff00',1, '#ff0000'],
    });

    var text = new Kinetic.Text({
        x:20,
        y: 15,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        shadowColor: '#666',
        shadowBlur: 1,
        shadowOffset: {
            x: 1,
            y: 1
        },
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x:text.getX()+text.getWidth(),
        y: 15+35,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 40,
        shadowColor: '#666',
        shadowBlur: 1,
        shadowOffset: {
            x: 1,
            y: 1
        },
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x:text1.getX()+text1.getWidth()+20,
        y: 15+35,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 40,
        shadowColor: '#666',
        shadowBlur: 1,
        shadowOffset: {
            x: 1,
            y: 1
        },
        fill: '#fff'
    });

    group.add(path);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_70 = function(group, config) {
    var path = new Kinetic.Path({
        data: 'm0,0L111,0L111,50L0,0z',
        fill: '#af0745'
    });

    var path1 = new Kinetic.Path({
        data: 'm0,0L111,50L-28,193L0,0z',
        fill: '#df0c5a'
    });

    var path2 = new Kinetic.Path({
        data: 'm111,50L111,193L-28,193L111,50z',
        fill: '#ff4e8f'
    });


    var text = new Kinetic.Text({
        x:10,
        y: 90,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#fff'
    });

    group.add(path);
    group.add(path1);
    group.add(path2);
    group.add(text);

}

ImageDrawManager.prototype.group_item_71 = function(group, config) {

    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 300,
        height: 90,
        fill: "#000",
        opacity:.5
    });

    var text = new Kinetic.Text({
        y: 22.5,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 45,
        width:300,
        align:'center',
        fill: '#f9d85d'
    });

    group.add(rect);
    group.add(text);
}

ImageDrawManager.prototype.group_item_72 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAACjCAMAAAD1q9FyAAACjlBMVEUAAAD30kz41E/52Fb511P511X41VL1zUL73WL721z2zUP511T62lv62Vn73WD73WT62Vr301D62Vjzxzn51Vb62Vv83WP83mX73GH51lb73GL62Vr41FT511n94nb832P51lf62l773WP62V341FX83WH511f83mr511f62Vz511n51lj62mD51lf7213ywzL62lv73WD62Fr41Vn511r94nf51lj94Xb41Vb94Xb73V/73GX30k/2z1P73Gz84GX+4nb83mj511j73WL832P73Wf6217832X511f833D832z52FX62GT94nb832z20FX72mb+4nn832v73G383W/1zU/30Vf+43n622T41Vj52F730VH62WD41VrvvSbwwCzxwzH622H30lT511z301X2z031y0f73mjwvyruuyL511v73Wf62F/30FDwwS31zUv1zEnwvinxwi/vvif301f832rvvCTzyDr0yj32zkzyxjb0zEDyxTT30VP0ykT41E/20Ej20Er30032z0/vuyTuuSDtuB763GX30kz1zkv1zUP0yELzyTv511T0ykXxwzP41VL62mP62F741VD84G352Fb73Gbyxzj2z0f94W762lryxDT832v41Fb1zkTxwS/51lPzyEH52Vj0yz7zxz/zxzn41FfuuiD1zELzxj773F71y0b51lT94W/yxTb2z0b0yEHttxv721zyxDLwwi7ttx330kr+4nD2zkb511b4007yxjj511j401D73WH63Gb73mD73F/zxj/721330U3zxjv62lnywzH832P401P0ykL83mf1zkj83WT83mH+43P94Gz401X94mz30E/84Wj932j83Wj94Gv722D9428ErA/+AAAAWHRSTlMABgMZAgsNFT0TEAkkHi67bkEpIK58WE5IM+zCZl/++vjp4NiHhHViOfbltaSYiiv79fDv3tjLxKCempZQ+ffx6djR0MixrKmSjnRU+/Xo3MWwbNF+68ODBY3+qgAAFw1JREFUeNrU2d1PUnEcx/FzQETAh4rCsgfKcvTc1nNZmpm5nJlZKxC4QEA3hekFXHChW+PCuTa3wxgbG1x044Xu3HTjTUOcXRxEkUwy/5s+P/y1ox2GVD7Ae/oHvPb1+/v9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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 206,
        height: 163
    });

    var path = new Kinetic.Path({
        x:194,
        y:71,
        data: 'm0,0L520,-37L11,92L0,0z',
        fill: '#1e2e6a'
    });

    var path1 = new Kinetic.Path({
        x:194,
        y:71,
        data: 'm11,91L520,-37L555,91L11,91z',
        fill: '#182451'
    });

    var text = new Kinetic.Text({
        x:206+11+20,
        y: 80,
        text: config.desc2,
        fontFamily: 'IMPACTR',
        fontSize: 70,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x:text.getX()+text.getWidth(),
        y: 80 + 35,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x:text1.getX()+text1.getWidth()+20,
        y: 80 + 25,
        text: config.desc3,
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#f9d75b'
    });

    var text3 = new Kinetic.Text({
        y: 60,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 80,
        width:206,
        align:'center',
        fill: '#000'
    });


    group.add(image);
    group.add(path);
    group.add(path1);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_73 = function(group, config) {
    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 375,
        height: 70,
        fill: "#000",
        opacity:.5
    });

    var text = new Kinetic.Text({
        x:20,
        y: 15,
        text: config.desc1.slice(0,2),
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#29dbfd'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth(),
        y: 15,
        text: config.desc1.slice(2,4),
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x: text1.getX()+text1.getWidth()+10,
        y: 15,
        text: config.desc1.slice(4,6),
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#eb2252'
    });

    var text3 = new Kinetic.Text({
        x: text2.getX()+text2.getWidth(),
        y: 15,
        text: config.desc1.slice(6,8),
        fontFamily: 'LTCH',
        fontSize: 40,
        fill: '#fff'
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}

ImageDrawManager.prototype.group_item_74 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 376,
        height: 88
    });

    var text = new Kinetic.Text({
        x:20,
        y: 22,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 45,
        fill: '#fff'
    });

    group.add(image);
    group.add(text);
}

ImageDrawManager.prototype.group_item_75 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 203,
        height: 203
    });

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'IMPACTR',
        fontSize: 60,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((203 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        x:-20,
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 35,
        width: 203,
        align: "center",
        fill: '#043c83'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_76 = function(group, config) {
    var rect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 700,
        height: 120,
        fill: "#fff",
        opacity:.5
    });

    var path = new Kinetic.Path({
        data: 'm616,-5L701,-5L701,120L616,-5z',
        fillLinearGradientStartPoint: {x:700, y:0},
        fillLinearGradientEndPoint: {x:700,y:120},
        fillLinearGradientColorStops: [0, '#17c0fc',0.46,'#216ec9',1, '#18c4fe'],
        shadowColor: '#405f7b',
        shadowBlur: 2,
        shadowOffset: {
            x: 1,
            y: 2
        }
    });

    var text = new Kinetic.Text({
        x:170,
        y: 32.5,
        text: config.desc1.slice(0,4),
        fontFamily: 'LTCH',
        fontSize: 55,
        fill: '#00234d'
    });

    var text1 = new Kinetic.Text({
        x:text.getX()+text.getWidth()+20,
        y: 32.5,
        text: config.desc1.slice(4,8),
        fontFamily: 'LTCH',
        fontSize: 55,
        fill: '#00234d'
    });

    group.add(rect);
    group.add(path);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_77 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: 215,
        height: 265
    });

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 70,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 30,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((215 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());


    group.add(image);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_78 = function(group, config) {
    var path = new Kinetic.Path({
        data: 'm572,47.5c0,26.233 -21.26703,47.5 -47.5,47.5l-477,0c-26.233,0 -47.5,-21.267 -47.5,-47.5l0,0c0,-26.233 21.267,-47.5 47.5,-47.5l477,0c26.23297,0 47.5,21.267 47.5,47.5l0,0z',
        fill:'#f03666',
        opacity:.5
    });

    var text = new Kinetic.Text({
        x:60,
        y: 25,
        text: config.desc1.slice(0,4),
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth()+40,
        y: 25,
        text: config.desc1.slice(4,8),
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    group.add(path);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_79 = function(group, config) {
    var temp_config=[
        {
            scale:1,
            color:'#ffc1d4'
        },
        {
            scale:0.8,
            color:'#ffd1df'
        },
        {
            scale:0.6,
            color:'#ffe0ea'
        },
        {
            scale:0.4,
            color:'#fff0f4'
        },
        {
            scale:0.2,
            color:'#fff'
        }
    ]
    var data='m53.652,0c54.661,0 61.501,37.501 65.088,39.439c10.756,4.572 24.208,-7.956 39.053,-3.943c43.44299,11.741 58.82899,50.592 38.05099,85.78c-19.59299,33.18401 -49.36299,52.442 -89.12099,66.06099c-11.261,3.858 -31.08,11.03101 -46.063,7.888c-45.006,-9.44199 -78.703,-117.17499 -50.066,-167.61799c9.479,-16.697 33.969,-27.607 43.058,-27.607z';

    for(var i in temp_config){
        var path = new Kinetic.Path({
            x:(205-205*temp_config[i].scale)/2,
            y:(196-196*temp_config[i].scale)/2,
            data:data,
            scale:{x:temp_config[i].scale,y:temp_config[i].scale},
            fill:temp_config[i].color,
            stroke: '#fff',
            strokeWidth: 4,
        });

        group.add(path);
    }

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'IMPACTR',
        fontSize: 60,
        fill: '#f03666'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#f03666'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((205 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 35,
        width: 205,
        align: "center",
        fill: '#f03666'
    });

   group.add(text);
   group.add(text1);
   group.add(text2);

}

ImageDrawManager.prototype.group_item_80 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 800,
        height: 100,
        fill: "#ff5f88",
        stroke: '#fff',
        strokeWidth: 4,
        opacity:.5
    });

    var text = new Kinetic.Text({
        x:60,
        y: 25,
        text: config.desc1.slice(0,4),
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth()+40,
        y: 25,
        text: config.desc1.slice(4,8),
        fontFamily: 'LTCH',
        fontSize: 50,
        fill: '#fff'
    });

    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        x: 555,
        y: -10,
        image: imageObj,
        width: 207,
        height: 171
    });


    group.add(rect);
    group.add(text);
    group.add(text1);
    group.add(image);
}

ImageDrawManager.prototype.group_item_81 = function(group, config) {
    var rect = new Kinetic.Rect({
        y:4,
        width: 800,
        height: 125,
        fill: "#fff",
        opacity:.5
    });

    var line = new Kinetic.Line({
        points: [0, 0, 800, 0],
        stroke: "#f08800",
        strokeWidth: 10
    });

    var text = new Kinetic.Text({
        x:260,
        y: 35,
        text: config.desc1.slice(0,4),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#ff5600'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth()+40,
        y: 35,
        text: config.desc1.slice(4,8),
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#ff5600'
    });



    group.add(line);
    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_82 = function(group, config) {
    var temp_config=[
        {
            scale:1.4,
            color:'#e36726'
        },
        {
            scale:1.2,
            color:'#f08a56'
        },
        {
            scale:1,
            color:'#ffac82'
        }
    ]
    var data='m152.196,22.294c5.605,-5.536 8.513,-13.792 7.049,-22.294l-159.245,0c1.375,7.958 6.273,18.81 12.73,22.198c-0.572,2.94 -0.648,6.039 -0.1,9.17c1.832,10.648 9.98,18.456 19.728,20.06c2.879,12.7 14.842,20.998 27.356,18.664c0.58,-0.104 1.14,-0.258 1.695,-0.40701c5.018,8.29 14.522,13.041 24.362,11.205c7.35999,-1.366 13.307,-6.104 16.66499,-12.409c3.00301,0.697 6.186,0.81 9.408,0.207c8.808,-1.636 15.605,-8.106 18.324,-16.305c0.99901,-0.05 2.007,-0.149 3.011,-0.336c12.95,-2.405 21.56999,-15.263 19.252,-28.719c-0.05499,-0.349 -0.162,-0.689 -0.235,-1.034z';

    for (var i in temp_config){
        var path = new Kinetic.Path({
            x:(160-160*temp_config[i].scale)/2,
            y:(81-81*temp_config[i].scale)/2,
            data:data,
            scale:{x:temp_config[i].scale,y:temp_config[i].scale},
            fill:temp_config[i].color
        });
        group.add(path);
    }

    var text = new Kinetic.Text({
        y: 15,
        text: config.desc1,
        fontFamily: 'FZZZHJT',
        fontSize: 40,
        width:160,
        align:'center',
        fill: '#fff'
    });

    group.add(text);
}


ImageDrawManager.prototype.group_item_83 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        image: imageObj,
        width: 230,
        height: 224
    });

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'IMPACTR',
        fontSize: 60,
        fill: '#ff5600'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#ff5600'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((230 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 35,
        width: 230,
        align: "center",
        fill: '#ff5600'
    });

   group.add(image);
   group.add(text);
   group.add(text1);
   group.add(text2);
}

ImageDrawManager.prototype.group_item_84 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAAEKCAMAAAAb5gKzAAABzlBMVEUAAAD/doP/X47/gIf/gID/gID/GI3/gID/gID/gID/AID/AIH/gID/gID/gID/gID/gID/gID/AIH/gID/gID/gID/gID/gID/gID/AID/gID/gID/gID/f8D/AID/AID/gID/AIH/gID/gID/gID/AID/e77/E4v/JZP/gID/gID/gID/gID/gID/gID/gID8icP/AIH/gID/AID/AIH/gID/AID/gID/PZ//S6b/gID/gID/gID/gID/dbv/gID/gID/e77/gID/gID/gID/X7D/gID/AIH/gID/gID/AID/gID/AID/AIH/LZj/gID/Z7T/gID/gID/D4j/AID/AID/AIH/gID/gID/AIH/AID/AIH/dLr/AID/gID/RKP/gID/YbH/abX/gID/H5D/AID/AIH/Tqj/AIH/AID/AID/bbf/AIH/AID/AIH/d7z/er3/AIH/NZz/V6z/XrD/Y7L/ZbP/cbn/Op7/AIH/AID/T6j/gID/AID/Wq3/AID/AIH/AIH/AIH/c7r/eLz/AIH/AID/gID/a7b/dLr/AID/AID/YbH/AID/AIH/b7j/AID/d7z/drve3t7e3t7/AIH/gID/AID/Cob/B4TD2Z/fAAAAlXRSTlMAAgQHC/389jYQ0gXy6ODbLuMI+xzqnZUUDEhCGBL9+fDAYFsyGxj++OzLvlJMJSEL69aukHJLO+bTzranbUlFPyT4wrmjooN5ZSopJRLz0YiGgP7189iPdXRbVU06Dd6qnoFp+/HuzsS0pXJtZEM/LhDtvKiYklzp5NvKxbuynId4YVM1Mxaue0/eyqGhimc+OjgrH/Jlhj8AAA6mSURBVHja7N3PalpREMfxifVyFao3khglupDoxr8pQggYJSEJIZJFSDZmFQRfo/s+QMvveUsppGr17FqYw/fzDIfh3HN/M2NADN4tb//aj+8G/Ff5xurl4a1dtH/riwH/VfP1+VZS9evAgIg07vVb0nr7ZEAsChN9aM0NiMSorzWlugFRqD8caV3bgBgczG614cqAGHQybaoUDfCvWNOWat4A/xpdbRlTtRGDqbb1qdqIwE1L204McO/94Ujbns+a/JGEd8OK/lZ9vqjnDHDsvZZop/61AY7lM+1RGhrg15n2ytrc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';
    var image = new Kinetic.Image({
        image: imageObj,
        width: 746,
        height: 266
    });


    var text = new Kinetic.Text({
        x:0,
        y: 205,
        text: config.desc1.slice(0,1),
        fontFamily: 'HYYYT',
        fontSize: 50,
        fill: '#ff0081'
    });

    var text1 = new Kinetic.Text({
        x:text.getX()+text.getWidth(),
        y: 205,
        text: config.desc1.slice(1,2),
        fontFamily: 'HYYYT',
        fontSize: 50,
        width:70,
        align:'center',
        fill: '#fff'
    });

    var text2 = new Kinetic.Text({
        x:text1.getX()+text1.getWidth(),
        y: 205,
        text: config.desc1.slice(2),
        fontFamily: 'HYYYT',
        fontSize: 50,
        fill: '#ff0081'
    });


    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_85 = function(group, config) {
    var path = new Kinetic.Path({
        data: 'm38.943,168.547c-45.924,0.007 -50.317,-60.41399 -18,-77c-8.026,-33.331 18.058,-46.081 41,-37c5.391,-14.039 20.506,-17.21 35,-19l-2.583,-2.375c-11.417,-11.209 -13.69,-10.947 -47.417,-27.625c52.557,-19.081 97.37,16.419 105.99999,26c43.67201,-22.127 65.80801,-5.143 73,26c37.245,-9.893 58.87,28.732 41,60c22.12,20.23201 32.18301,60.29401 -17.06699,72.29401c6.81299,41.875 -44.08301,50.45799 -62.08301,32.125c-17.783,27.343 -60.083,36.95801 -82.85,2.58099c-40.818,6.41901 -67.152,-11.354 -66,-56z',
        fill:'#ff0081'
    });

    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'HYYYT',
        fontSize: 90,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 40,
        text: '元',
        fontFamily: 'HYYYT',
        fontSize: 40,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((285 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY() + 10,
        text: config.desc2,
        fontFamily: 'HYYYT',
        fontSize: 50,
        width: 285,
        align: "center",
        fill: '#fff'
    });

   group.add(path);
   group.add(text);
   group.add(text1);
   group.add(text2);
}

ImageDrawManager.prototype.group_item_86 = function(group, config) {

    var text = new Kinetic.Text({
        text: config.desc1,
        fontFamily: 'FZYY',
        fontSize: 60,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x:text.getX(),
        y: text.getHeight()+10,
        text: config.desc2,
        fontFamily: 'FZYY',
        fontSize: 60,
        fill: '#fc6e6e'
    });


   group.add(text);
   group.add(text1);
}

ImageDrawManager.prototype.group_item_87 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        image: imageObj,
        width: 220,
        height: 228
    });


    var text = new Kinetic.Text({
        y: 50,
        text: config.desc1,
        fontFamily: 'FZYY',
        fontSize: 60,
        fill: '#ff0030'
    });

    var text1 = new Kinetic.Text({
        y: 50 + 20,
        text: '元',
        fontFamily: 'FZYY',
        fontSize: 35,
        fill: '#ff0030'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((220 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY(),
        text: config.desc2,
        fontFamily: 'FZYY',
        fontSize: 35,
        width: 220,
        align: "center",
        fill: '#ff0030'
    });

   group.add(image);
   group.add(text);
   group.add(text1);
   group.add(text2);
}

ImageDrawManager.prototype.group_item_88 = function(group, config) {
    var path = new Kinetic.Path({
        data: 'm434.43201,47c0,-25.957 29.375,-39.54 65.56799,-47l-500,0l0,94l500,0c-36.19299,-8.148 -65.56799,-21.042 -65.56799,-47z',
        fill:'#fe56a4',
        opacity:.5
    });

    var text = new Kinetic.Text({
        x:100,
        y: 10,
        text: config.desc1,
        fontFamily: 'FZYY',
        fontSize: 70,
        fill: '#fff'
    });

   group.add(path);
   group.add(text);
}

ImageDrawManager.prototype.group_item_89 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 280,
        height: 80,
        fill: "#ff88b4"
    });

    var text = new Kinetic.Text({
        x:20,
        y: 10,
        text: config.desc1.slice(0,2),
        fontFamily: 'FZCHJT',
        fontSize: 60,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        x: text.getX()+text.getWidth(),
        y: 10,
        text: config.desc1.slice(2,4),
        fontFamily: 'FZCHJT',
        fontSize: 60,
        fill: '#000'
    });

   group.add(rect);
   group.add(text);
   group.add(text1);
}

ImageDrawManager.prototype.group_item_90 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        image: imageObj,
        width: 342,
        height: 200
    });

    var text = new Kinetic.Text({
        x:77,
        y:75,
        fill: '#fff',
        fontSize: 30,
        fontFamily: 'FZCHJT',
        text: config.desc1,
        rotationDeg:-11,
        width:210,
        align:'center'
    });

    var text1 = new Kinetic.Text({
        x:55,
        y:146,
        fill: '#fff',
        fontSize: 40,
        fontFamily: 'FZCHJT',
        text: config.desc2,
        rotationDeg:-11
    });

    var text2 = new Kinetic.Text({
        x:text1.getWidth()+text1.getX()+20,
        y:120,
        fill: '#fff',
        fontSize: 40,
        fontFamily: 'FZCHJT',
        text: config.desc3,
        rotationDeg:-11
    });

   group.add(image);
   group.add(text);
   group.add(text1);
   group.add(text2);
}

ImageDrawManager.prototype.group_item_91 = function(group, config) {

    var text = new Kinetic.Text({
        x:300,
        fill: '#000',
        fontSize: 50,
        fontFamily: 'LTCH',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        x:560,
        y:-20,
        fill: '#000',
        fontSize: 70,
        fontFamily: '微软雅黑',
        text: '¥'
    });

    var line = new Kinetic.Line({
        points: [0, text.getHeight()+10, 800, text.getHeight()+10],
        stroke: "#ff0000",
        strokeWidth: 5
    });

    for(var i=0;i<config.desc2.length;i++){
        var rect = new Kinetic.Rect({
            x:i*55+text1.getX()+text1.getWidth()+10,
            y:-30,
            width: 50,
            height: 80,
            fill: "#a3a3a3"
        });

        var text2 = new Kinetic.Text({
            y:-10,
            x:rect.getX(),
            fill: '#ff0000',
            fontSize: 50,
            fontFamily: 'LTCH',
            width:rect.getWidth(),
            align:'center',
            text: config.desc2.slice(i,i+1)
        });

        group.add(rect);
        group.add(text2);
    }


    group.add(text1);
    group.add(text);
    group.add(line);

}

ImageDrawManager.prototype.group_item_92 = function(group, config) {

    var hexagon = new Kinetic.RegularPolygon({
        x: 122,
        y: 122,
        sides: 3,
        radius: 122,
        fill: '#000',
        opacity: .53
    });

    var hexagon1 = new Kinetic.RegularPolygon({
        x: 122,
        y: 122,
        sides: 3,
        radius: 80,
        fill: '#fff'
    });

    var text3 = new Kinetic.Text({
        x:112,
        y: 75,
        text: "¥",
        fontFamily: '微软雅黑',
        fontSize: 40,
        fill: '#f00'
    });

    var text4 = new Kinetic.Text({
        x:15,
        y: 115,
        text: config.desc1,
        fontFamily: 'LTCH',
        fontSize: 40,
        width:214,
        align:'center',
        fill: '#f00'
    });


    var text5 = new Kinetic.Text({
        x: -730,
        y: 20,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 40,
        width:800,
        align:'right',
        fill: '#f00'
    });

    group.add(hexagon);
    group.add(hexagon1);
    group.add(text3);
    group.add(text4);
    group.add(text5);
}

ImageDrawManager.prototype.group_item_93 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 100,
        height: 71,
        fill: "#ca1d00"
    });

    var rect1 = new Kinetic.Rect({
        x:rect.getWidth(),
        width: 270,
        height: 71,
        fill: "#fff"
    });

    var text = new Kinetic.Text({
        x:20,
        y:10,
        fill: '#fff',
        fontSize: 30,
        fontFamily: 'LTCH',
        width:60,
        align:'center',
        text: config.desc1
    });


    var text1 = new Kinetic.Text({
        x:rect1.getX()+10,
        y:10,
        fill: '#cf1f02',
        fontSize: 60,
        fontFamily: 'LTCH',
        text: config.desc2
    });

    group.add(rect);
    group.add(rect1);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_94 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 276,
        height: 70,
        fill: "#000",
        opacity:.5
    });

    var text = new Kinetic.Text({
        y:10,
        fill: '#fff',
        fontSize: 60,
        fontFamily: 'LTCH',
        width:276,
        align:'center',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        x:text.getX()+60,
        y:text.getHeight()+30,
        fill: '#fff',
        fontSize: 50,
        fontFamily: 'LTCH',
        text: config.desc2.slice(0,2)
    });

    var text2 = new Kinetic.Text({
        x:text1.getX()+text1.getWidth(),
        y:text1.getY(),
        fill: '#ff9c00',
        fontSize: 50,
        fontFamily: 'LTCH',
        text: config.desc2.slice(2,4)
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
    group.add(text2);
}

ImageDrawManager.prototype.group_item_95 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 235,
        height: 100,
        fill: "#ca1d00"
    });

    var rect1 = new Kinetic.Rect({
        x:235,
        width: 565,
        height: 100,
        fill: "#000",
        opacity:.5
    });

    var text = new Kinetic.Text({
        y:20,
        fill: '#fff',
        fontSize: 60,
        fontFamily: 'LTCH',
        width:235,
        align:'center',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        x:255,
        y:20,
        fill: '#ff2500',
        fontSize: 60,
        fontFamily: 'LTCH',
        text: config.desc2
    });

    var text2 = new Kinetic.Text({
        x:text1.getX()+text1.getWidth()+30,
        y:25,
        fill: '#fff',
        fontSize: 40,
        fontFamily: 'LTCH',
        text: config.desc3
    });

    group.add(rect);
    group.add(rect1);
    group.add(text);
    group.add(text1);
    group.add(text2);

}

ImageDrawManager.prototype.group_item_96 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 193,
        height: 239,
        stroke: '#000',
        strokeWidth: 4
    });

    var text = new Kinetic.Text({
        x:35,
        y:20,
        fill: '#000',
        fontSize: 60,
        fontFamily: 'LTCH',
        width:130,
        align:'center',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        y:text.getY()+text.getHeight()+20,
        fill: '#000',
        fontSize: 45,
        fontFamily: 'LTH',
        width:193,
        align:'center',
        text: config.desc2
    });

    group.add(rect);
    group.add(text);
    group.add(text1);

}

ImageDrawManager.prototype.group_item_97 = function(group, config) {

    var text = new Kinetic.Text({
        fill: '#000',
        fontSize: 40,
        fontFamily: 'LTCH',
        width:400,
        align:'right',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        y:text.getHeight()+text.getY()+10,
        fill: '#000',
        fontSize: 40,
        fontFamily: 'LTCH',
        width:400,
        align:'right',
        text: config.desc2
    });

    var text2 = new Kinetic.Text({
        y:text1.getHeight()+text1.getY()+25,
        fill: '#ff0000',
        fontSize: 40,
        fontFamily: 'LTCH',
        text: config.desc3.slice(0,(config.desc3.indexOf('：')||config.desc3.indexOf(':')||config.desc3.length)+1)
    });

    var text3 = new Kinetic.Text({
        // x:text2.getWidth()+text2.getX(),
        y:text1.getHeight()+text1.getY()+10,
        fill: '#ff0000',
        fontSize: 60,
        fontFamily: 'LTCH',
        text: config.desc3.slice((config.desc3.indexOf('：')||config.desc3.indexOf(':')||config.desc3.length)+1)
    });

    text2.setX(400-(text2.getWidth()+text3.getWidth()));
    text3.setX(text2.getWidth()+text2.getX());


    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);

}

ImageDrawManager.prototype.group_item_98 = function(group, config) {

    var rect = new Kinetic.Rect({
        width: 115,
        height: 50,
        fill: '#fff'
    });

    var rect1 = new Kinetic.Rect({
        x:115,
        width: 165,
        height: 50,
        fill: '#000'
    });

    var text = new Kinetic.Text({
        y:10,
        fill: '#000',
        fontSize: 35,
        fontFamily: 'LTCH',
        width:115,
        align:'center',
        text: config.desc1
    });

    var text1 = new Kinetic.Text({
        x:text.getWidth(),
        y:10,
        fill: '#fff',
        fontSize: 35,
        fontFamily: 'LTCH',
        width:rect1.getWidth(),
        align:'center',
        text: config.desc2
    });

    group.add(rect);
    group.add(rect1);
    group.add(text);
    group.add(text1);

}

ImageDrawManager.prototype.group_item_99 = function(group, config) {

    var rect = new Kinetic.Rect({
        width: 673,
        height: 145,
        fill: '#fff'
    });


    var text = new Kinetic.Text({
        y:20,
        fill: '#ff0000',
        fontSize: 35,
        fontFamily: 'LTCH',
        width:673,
        align:'center',
        text: config.desc1
    });


    var text1 = new Kinetic.Text({
        y:text.getY()+text.getHeight()+20,
        fill: '#ff0000',
        fontSize: 55,
        fontFamily: 'LTCH',
        text: config.desc2
    });

    text1.x((673-text1.getWidth())/2);

    var line1 = new Kinetic.Line({
        y:text.getY()+text.getHeight()+10,
        points: [text1.getX()-20, 0, text1.getWidth()+text1.getX()+20, 0],
        stroke: "#ff0000",
        strokeWidth: 4
    });

    group.add(rect);
    group.add(line1);
    group.add(text);
    group.add(text1);

}

ImageDrawManager.prototype.group_item_100 = function(group, config) {
    var rect = new Kinetic.Rect({
        width: 240,
        height: 178,
        stroke: '#cd00ff',
        strokeWidth: 10
    });

    var text = new Kinetic.Text({
        y:20,
        fill: '#cd00ff',
        fontSize: 50,
        fontFamily: 'LTCH',
        width:240,
        align:'center',
        text: config.desc1.slice(0,4)
    });

    var text1 = new Kinetic.Text({
        y:20+text.getHeight()+text.getY(),
        fill: '#cd00ff',
        fontSize: 50,
        fontFamily: 'LTCH',
        width:240,
        align:'center',
        text: config.desc1.slice(4,8)
    });

    group.add(rect);
    group.add(text);
    group.add(text1);
}

ImageDrawManager.prototype.group_item_101 = function(group, config) {
    var imageObj = new Image();
    imageObj.src = 'data:image/png;base64,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';
    var image = new Kinetic.Image({
        image: imageObj,
        width: 262,
        height: 260
    });

    var text3 = new Kinetic.Text({
        y:30,
        fill: '#4d145c',
        fontSize: 40,
        fontFamily: 'LTCH',
        width:262,
        align:'center',
        text: config.desc1
    });

    var text = new Kinetic.Text({
        y: 100,
        text: config.desc2,
        fontFamily: 'LTCH',
        fontSize: 60,
        fill: '#fff'
    });

    var text1 = new Kinetic.Text({
        y: 100 + 20,
        text: '元',
        fontFamily: 'LTCH',
        fontSize: 35,
        fill: '#fff'
    });

    var total_width = text.getWidth() + text1.getWidth();

    text.setX((262 - total_width) / 2);
    text1.setX(text.getX() + text.getWidth());

    var text2 = new Kinetic.Text({
        y: text.getHeight() + text.getY()+10,
        text: config.desc3,
        fontFamily: 'LTCH',
        fontSize: 35,
        width: 262,
        align: "center",
        fill: '#fff'
    });

    group.add(image);
    group.add(text);
    group.add(text1);
    group.add(text2);
    group.add(text3);
}
