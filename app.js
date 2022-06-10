//bai-1
document.getElementById('in-diem').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var diem1 = Number(document.getElementById('diem1').value);
    var diem2 = Number(document.getElementById('diem2').value);
    var diem3 = Number(document.getElementById('diem3').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diem = (diem1 + diem2 + diem3) / 3 + khuVuc + doiTuong;
    var html = ''
    if (diem > diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
        html = "<p>Điểm của bạn là " + diem + "</p>" + "<p>Đỗ</p>";
        document.getElementById('domKetQua').innerHTML = html;
    } else {
        html = "<p>Điểm của bạn là " + diem + "</p>" + "<p>Trượt</p>";
        document.getElementById('domKetQua').innerHTML = html;
    }
}


//bai-2
document.getElementById('in-thong-tin').onclick = function () {
    // alert('sdf')
    var so_kw = Number(document.getElementById('kw').value);
    var tongtien = 0;
    var html = ''

    if (so_kw <= 50) {
        tongtien = so_kw * 500;
    } else if (so_kw > 50 && so_kw <= 100) {
        tongtien = 50 * 500 + (so_kw - 50) * 650;
    } else if (so_kw > 100 && so_kw <= 200) {
        tongtien = 50 * 500 + 50 * 650 + (so_kw - 100) * 850;
    } else if (so_kw > 200 && so_kw <= 350) {
        tongtien = 50 * 500 + 50 * 650 + 100 * 850 + (so_kw - 200) * 1100;
    } else if (so_kw > 350) {
        tongtien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (so_kw - 350) * 1300;
    }
        html = "<p>Số Tiền bạn phải trả là " + tongtien + " vnd</p>";
        html = 
    document.getElementById('domKetQua-b2').innerHTML = html;
}
