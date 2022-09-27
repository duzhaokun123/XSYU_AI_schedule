var language = "zh";
var table0 = new CourseTable(2022,70);
var unitCount = 10;
var index=0;
var activity=null;
    var teachers = [{id:1569,name:"王媛",lab:false}];
    var actTeachers = [{id:1569,name:"王媛",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","13716(A100332.90)","大学英语Ⅰ（1）(A100332) 总学时 64 (理论学时:32 线上学时:32 )","97",actTeacherName.join(',')+" 鄠邑校区A217","00011111111111111110000000000000000000000000000000000",null,null,assistantName,"");
        index =3*unitCount+2;
        table0.activities[index][table0.activities[index].length]=activity;
        index =3*unitCount+3;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:1483,name:"曹小帅",lab:false}];
    var actTeachers = [{id:1483,name:"曹小帅",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11170(A010040.36)","高等数学Ⅰ（上）(A010040) 总学时 88 (理论学时:88 )","5",actTeacherName.join(',')+" 鄠邑校区B202","00011111111111111100000000000000000000000000000000000",null,null,assistantName,"");
        index =0*unitCount+0;
        table0.activities[index][table0.activities[index].length]=activity;
        index =0*unitCount+1;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:1483,name:"曹小帅",lab:false}];
    var actTeachers = [{id:1483,name:"曹小帅",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11170(A010040.36)","高等数学Ⅰ（上）(A010040) 总学时 88 (理论学时:88 )","5",actTeacherName.join(',')+" 鄠邑校区B202","00011111111111111100000000000000000000000000000000000",null,null,assistantName,"");
        index =2*unitCount+2;
        table0.activities[index][table0.activities[index].length]=activity;
        index =2*unitCount+3;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:1483,name:"曹小帅",lab:false}];
    var actTeachers = [{id:1483,name:"曹小帅",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11170(A010040.36)","高等数学Ⅰ（上）(A010040) 总学时 88 (理论学时:88 )","5",actTeacherName.join(',')+" 鄠邑校区B202","00011111111111111000000000000000000000000000000000000",null,null,assistantName,"");
        index =4*unitCount+0;
        table0.activities[index][table0.activities[index].length]=activity;
        index =4*unitCount+1;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:820,name:"陈兵",lab:false}];
    var actTeachers = [{id:820,name:"陈兵",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","5086(A030091.42)","大学体育（1）(A030091) 总学时 32 (理论学时:24 实践学时:8 )","202",actTeacherName.join(',')+" 工程训练中心羽毛球场","00011111111111111000000000000000000000000000000000000",null,null,assistantName,"");
        index =1*unitCount+4;
        table0.activities[index][table0.activities[index].length]=activity;
        index =1*unitCount+5;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:1107,name:"顾雪凡",lab:true}];
    var actTeachers = [{id:1107,name:"顾雪凡",lab:true}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","5744(B080370.44)","普通化学(B080370) 总学时 40 (理论学时:32 实验学时:8 )","21",actTeacherName.join(',')+" 鄠邑校区B302","00011111111110000000000000000000000000000000000000000",null,null,assistantName,"");
        index =1*unitCount+2;
        table0.activities[index][table0.activities[index].length]=activity;
        index =1*unitCount+3;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:1107,name:"顾雪凡",lab:true}];
    var actTeachers = [{id:1107,name:"顾雪凡",lab:true}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","5744(B080370.44)","普通化学(B080370) 总学时 40 (理论学时:32 实验学时:8 )","21",actTeacherName.join(',')+" 鄠邑校区B302","00011111111110000000000000000000000000000000000000000",null,null,assistantName,"");
        index =3*unitCount+4;
        table0.activities[index][table0.activities[index].length]=activity;
        index =3*unitCount+5;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:423,name:"苏敏",lab:false}];
    var actTeachers = [{id:423,name:"苏敏",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","9894(A290024.F5)","思政课基础(A290024) 总学时 48 (理论学时:40 实践学时:8 )","14",actTeacherName.join(',')+" 鄠邑校区B215","00011111111110000000000000000000000000000000000000000",null,null,assistantName,"");
        index =0*unitCount+6;
        table0.activities[index][table0.activities[index].length]=activity;
        index =0*unitCount+7;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:423,name:"苏敏",lab:false}];
    var actTeachers = [{id:423,name:"苏敏",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","9894(A290024.F5)","思政课基础(A290024) 总学时 48 (理论学时:40 实践学时:8 )","14",actTeacherName.join(',')+" 鄠邑校区B215","00011111111110000000000000000000000000000000000000000",null,null,assistantName,"");
        index =4*unitCount+4;
        table0.activities[index][table0.activities[index].length]=activity;
        index =4*unitCount+5;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:1535,name:"陈睿",lab:false}];
    var actTeachers = [{id:1535,name:"陈睿",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11198(B020028.07)","大学语文(B020028) 总学时 16 (理论学时:16 )","11",actTeacherName.join(',')+" 鄠邑校区B210","00011111111000000000000000000000000000000000000000000",null,null,assistantName,"");
        index =0*unitCount+2;
        table0.activities[index][table0.activities[index].length]=activity;
        index =0*unitCount+3;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:497,name:"郑凯东",lab:false}];
    var actTeachers = [{id:497,name:"郑凯东",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11197(A070019.68)","大学计算机基础(A070019) 总学时 32 (理论学时:8 上机学时:8 线上学时:16 )","9",actTeacherName.join(',')+" 鄠邑校区B206","00011111111000000000000000000000000000000000000000000",null,null,assistantName,"");
        index =4*unitCount+2;
        table0.activities[index][table0.activities[index].length]=activity;
        index =4*unitCount+3;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:497,name:"郑凯东",lab:false}];
    var actTeachers = [{id:497,name:"郑凯东",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11197(A070019.68)","大学计算机基础(A070019) 总学时 32 (理论学时:8 上机学时:8 线上学时:16 )","9",actTeacherName.join(',')+" 鄠邑校区B206","00011111111000000000000000000000000000000000000000000",null,null,assistantName,"");
        index =0*unitCount+4;
        table0.activities[index][table0.activities[index].length]=activity;
        index =0*unitCount+5;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:2588,name:"张晰",lab:false}];
    var actTeachers = [{id:2588,name:"张晰",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","13724(A290001.35)","形势与政策（1）(A290001) 总学时 8 (理论学时:8 )","39",actTeacherName.join(',')+" 鄠邑校区B104","00011110000000000000000000000000000000000000000000000",null,null,assistantName,"");
        index =3*unitCount+8;
        table0.activities[index][table0.activities[index].length]=activity;
        index =3*unitCount+9;
        table0.activities[index][table0.activities[index].length]=activity;
    var teachers = [{id:261,name:"张骁勇",lab:false}];
    var actTeachers = [{id:261,name:"张骁勇",lab:false}];
    var assistant = _.filter(actTeachers, function(actTeacher) {
        return (_.where(teachers, {id:actTeacher.id,name:actTeacher.name,lab:actTeacher.lab}).length == 0) && (actTeacher.lab == true);
    });
    var assistantName = "";
    if (assistant.length > 0) {
        assistantName = assistant[0].name;
        actTeachers = _.reject(actTeachers, function(actTeacher) {
            return _.where(assistant, {id:actTeacher.id}).length > 0;
        });
    }
    var actTeacherId = [];
    var actTeacherName = [];
    for (var i = 0; i < actTeachers.length; i++) {
        actTeacherId.push(actTeachers[i].id);
        actTeacherName.push(actTeachers[i].name);
    }
        activity = new TaskActivity(actTeacherId.join(','),"","11211(A120193.02)","新生研讨课(A120193) 总学时 8 (理论学时:8 )","25",actTeacherName.join(',')+" 鄠邑校区B306","00011110000000000000000000000000000000000000000000000",null,null,assistantName,"");
        index =1*unitCount+0;
        table0.activities[index][table0.activities[index].length]=activity;
        index =1*unitCount+1;
        table0.activities[index][table0.activities[index].length]=activity;
table0.marshalTable(2,1,20);
