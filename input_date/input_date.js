/*
* @description 조건별 날짜 포맷 변경
*/
function onChangeCal(event){
    console.log("달력")
      var selectOpt =$("#calendar option:selected").val();
    console.log(selectOpt)
    var html = '';
    if(selectOpt == 'day'){
      html += '<input type="date" class="input_type" id="startDate" onChange="startValidity(event)">';
      html += '<span class="hypen"> ~ </span> <input id="endDate" type="date" class="input_type" onChange="endValidity(event)">';
    }else if(selectOpt == 'month'){
      html += '<input type="month" class="input_type" id="startDate" onChange="startValidity(event)">'; 
      html += '<span class="hypen"> ~ </span> <input id="endDate" type="month" class="input_type" onChange="endValidity(event)">';
    }else if(selectOpt == 'week'){
      html += '<input type="week" class="input_type" id="startDate" onChange="startValidity(event)">'; 
      html += '<span class="hypen"> ~ </span> <input id="endDate" type="week" class="input_type" onChange="endValidity(event)">';
    }else{
      var dt = new Date();
      var year = parseInt(dt.getFullYear());
      console.log(year)
      html += '<input type="number" class="input_type" id="startDate" min="1950" max="'+ (year-1) +'" placeholder="조회 시작 년도를 입력하세요(YYYY)" onChange="startValidity(event)">';
      html += '<span class="hypen"> ~ </span><input id="endDate" type="number" class="input_type" value="'+ year +'" readonly>';
    }
    $('#cal').html(html);
  }
  
  /*
  * @description 시작일 유효성
  */
  function startValidity(e){
    var selectOpt = $("#calendar option:selected").val();
    var startD = new Date(e.target.value);
    if(selectOpt == "week"){
      startD = getStartDateFromISOWeek(e.target.value);
    }
      var startValidity = Math.floor(now.valueOf()/(24*60*60*1000)-startD.valueOf()/(24*60*60*1000));
    
    if(startValidity < 0 ){
      $('#startDate').val('');
      return   alert('오늘 날짜 이후로는 조회가 불가능합니다.');
    }
    
    if(selectOpt == "day"){
      if(startD.getFullYear() == now.getFullYear() && startD.getMonth() == now.getMonth() && startD.getDay() == now.getDay()){
        startD = startD.toISOString().slice(0, 10);
        $('#endDate').val(startD);
        return   alert('종료일은 최대 금일까지 선택 가능합니다.');
      }
    }else if(selectOpt == "week"){
      document.getElementById("startDate").stepUp(1);
      var sun = document.getElementById("startDate").value;
      var sunISO = getStartDateFromISOWeek(sun);
  
      if(startD.getTime() <= now.getTime() && now.getTime() < sunISO.getTime()){
        document.getElementById("startDate").stepDown(1);
        startD = getWeekFromISODate(startD);
        $('#endDate').val(startD);
        return   alert('종료일은 최대 금주까지 선택 가능합니다.');
      }
  
      document.getElementById("startDate").stepDown(1);
  
    }else if(selectOpt == "month"){
      if(startD.getFullYear() == now.getFullYear() && startD.getMonth() == now.getMonth()){
        startD = startD.toISOString().slice(0, 7);
        $('#endDate').val(startD);
        return   alert('종료일은 최대 금월까지 선택 가능합니다.');
      }
    }else{
      return;
    }
    
    $('#endDate').val('');
  }
  
  
  /*
  * @description 종료일 유효성
  */
  function endValidity(e){
    var selectOpt = $("#calendar option:selected").val();
    var endD = new Date(e.target.value);
      var endValidity = Math.floor(now.valueOf()/(24*60*60*1000)-endD.valueOf()/(24*60*60*1000));
    var $startDate = $('#startDate').val();
  
    if(selectOpt == "week"){
      endD = getStartDateFromISOWeek(e.target.value);
      endValidity = Math.floor(now.valueOf()/(24*60*60*1000)-endD.valueOf()/(24*60*60*1000));
      $startDate = getStartDateFromISOWeek($startDate);
      
      if($startDate.getTime() > endD.getTime()){
        $('#endDate').val('');
        return   alert('종료일은 시작일 이전으로 선택 불가능합니다.');
      }
      
    }else{
      $startDate = $startDate.split('-');
      if(selectOpt == "day"){
        startD = new Date($startDate[0], $startDate[1]-1, $startDate[2]);
      }
      if(selectOpt == "month"){
        startD = new Date($startDate[0], ($startDate[1]-1));
      }
      if(startD.getTime() > endD.getTime()){
        $('#endDate').val('');
        return   alert('종료일은 시작일 이전으로 선택 불가능합니다.');
      }
    }
    var startD, limitD, msg;
    
    if($startDate == "" || $startDate == null){
      $('#endDate').val('');
      return   alert('종료일은 시작일 선택 후 선택 가능합니다.');
    }
  
    if(endValidity < 0){
      $('#endDate').val('');
      return   alert('금일 이후로 선택 불가능합니다.');
    }
    
    if(selectOpt == "day"){
      limitD = new Date(startD.getFullYear(),startD.getMonth()+1,startD.getDate());
      msg = '종료일은 시작일로부터 30일까지 선택가능합니다.'
      $('#endDate').attr('max', limitD);
      
    }else if(selectOpt == "week"){
      startD = new Date($startDate[0], $startDate[1]-1, $startDate[2]);
      limitD = new Date(startD.getFullYear(),startD.getMonth()+3,startD.getDate());
      limitD = getWeekFromISODate(limitD);
      msg = '종료일은 시작일로부터 3개월까지 선택가능합니다.'
  
      $('#endDate').attr('max', limitD);
  
    }else if(selectOpt == "month"){
      limitD = new Date(startD.getFullYear(),startD.getMonth()+12,startD.getDate());
      msg = '종료일은 시작일로부터 12개월까지 선택가능합니다.'
  
      $('#endDate').attr('max', limitD);
    }
    
      endValidity = Math.floor(endD.valueOf()/(24*60*60*1000)-limitD.valueOf()/(24*60*60*1000));
  
      if(endValidity > 0){
      $('#endDate').val('');
      return   alert(msg);
    }
  }
  
  //Date 객체를 받아 week number를 반환 
  function getWeekFromISODate(dt) { 
    dt.setHours(0,0,0,0); 
    dt.setDate(dt.getDate() + 3 - (dt.getDay() + 6) % 7); 
    var week1 = new Date(dt.getFullYear(), 0, 4); 
  
    var weekNumber = 1 + Math.round(((dt.getTime() - week1.getTime())/ 86400000 - 3 + (week1.getDay() + 6) % 7) / 7); 
    
    return dt.getFullYear() +'-W'+ weekNumber; 
  } 
  
  // YYYY-W00 형태의 ISO 8601 week number를 받아 해당 주의 월요일 Date 객체를 반환 
  function getStartDateFromISOWeek(ISOweek) { 
    var y = parseInt(ISOweek.substring(0, 4)); 
    var w = parseInt(ISOweek.substring(6, 8)); 
    
    var simpleDate = new Date(y, 0, 1 + (w - 1) * 7); 
    var dayOfWeek = simpleDate.getDay(); 
    var ISOweekStart = simpleDate; 
    
    if (dayOfWeek <= 4) {
      ISOweekStart.setDate(simpleDate.getDate() - simpleDate.getDay() + 1);
    } else { 
      ISOweekStart.setDate(simpleDate.getDate() + 8 - simpleDate.getDay()); 
    } 
    
    return ISOweekStart; 
  }
  
  /**
   *  yyyy-MM-dd 포맷으로 반환
   */
  function getFormatDate(date){
      var year = date.getFullYear();              //yyyy
      var month = (1 + date.getMonth());          //M
      month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
      var day = date.getDate();                   //d
      day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
      return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }