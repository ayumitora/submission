$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    let average = sum/5;
    $("#avarage_indicate").text(average);
  }
  
  function get_achievement(){
   let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    let average = sum/5;
  
    $("#avarage_indicate").text(average);
    console.log(average);
    if(average >= 80){
      return"A";
    }else if(average >= 60){
      return "B";
    }else if(average >= 40){
      return "C";
    }else if(average >= 1){
      return "D";
    }else{
      return "得点を入力してください";
    }
  }
  
  function get_pass_or_failure(criterion){
    if(Number($('#national_language').val()) >= 60 && Number($('#english').val()) >= 60 && Number($('#mathematics').val()) >= 60 && Number($('#science').val()) >= 60 && Number($('#society').val()) >= 60){
     return"合格";
   }else{
     return"不合格";
   }
  }

  function judgement(){
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です。</label>`);
  }

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
  score_indicate();
  });
  
  $('#btn-evaluation').click(function() {
    get_achievement();
    $('#evaluation').text(get_achievement)
    //console.log(get_achievement());
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
    $('#judge').text(get_pass_or_failure)
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});