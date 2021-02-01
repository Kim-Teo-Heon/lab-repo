exports.img_err = function(){
    let img_err =  "<script type='text/javascript'> alert('이미지 파일이 입력되지 않았습니다'); history.go(-1); </script>"
    return img_err;
}

exports.text_err = function(){
    let text_err =  "<script type='text/javascript'> alert('텍스트가 입력되지 않았습니다'); history.go(-1); </script>"
    return text_err;
}

exports.year_err = function(){
    let text_err =  "<script type='text/javascript'> alert('년도가 입력되지 않았습니다'); history.go(-1); </script>"
    return text_err;
}