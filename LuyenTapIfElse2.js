function kiểm_tra(){
    let can_nang = document.getElementById("can_nang").value;
    let chieu_cao = document.getElementById("chieu_cao".valu);
    let bmi = can_nang / (Math.pow(chieu_cao))
    let result = "";
    if (bmi <16)
        result = "gần độ 3.ăn thật nhiều vào nhé"
    else if (bmi < 17)
        result = "gầy cấp độ 2"
    else if (bmi < 18.5)
        result = "gầy cấp độ 1"
    else if (bmi < 25)
        result ="bình thường"
    else if (bmi < 30)
        result ="thừa cân "
    else if (bmi < 35)
        result = "béo phì cấp độ 1"
    else if (bmi < 40)
        result = "béo phì cấp độ 2"
    else
        result = "béo phì cấp độ 3"
    document.getElementById("result").innerHTML ="chỉ số BMI là: " + bmi +". bạn " +"<b>"+ result + "</b>";

}
