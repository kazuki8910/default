
    // スタッフ紹介モーダル
    {
        // メンバーの数取得
        const $staffs = $(".staff__content");
        const staffNum = $staffs.length; // スタッフの人数
        let showStaff; // 表示中のスタッフの番号格納

        // メンバープロフィール表示
        for(let i=1; i<=staffNum; i++){
            $(`#staff${i}`).click(function(){
                $("#modal").fadeIn();
                $(`#modal${i}`).fadeIn();
                showStaff = i;
                console.log(showStaff);
            });
        }

        // プロフィール閉じる
        $(".modal__close").click(function(){
            $("#modal").fadeOut();
            $('.modal__content').fadeOut();
        });

        // 進むボタン
        $(".modal__next").click(function(){
            if(showStaff >= staffNum){
                $(`#modal${showStaff}`).fadeOut();
                $(`#modal${1}`).fadeIn();
                showStaff = 1;
                console.log(showStaff);
            }else{
                $(`#modal${showStaff}`).fadeOut();
                $(`#modal${showStaff+1}`).fadeIn();
                showStaff = showStaff+1;
                console.log(showStaff);
            }
        });

        // 戻るボタン
        $(".modal__prev").click(function(){
            if(showStaff <= 1){
                $(`#modal${showStaff}`).fadeOut();
                $(`#modal${staffNum}`).fadeIn();
                showStaff = staffNum;
                console.log(showStaff);
            }else{
                $(`#modal${showStaff}`).fadeOut();
                $(`#modal${showStaff-1}`).fadeIn();
                showStaff = showStaff-1;
                console.log(showStaff);
            }
        });

        // 枠をクリックでモーダル閉じる
        $("#modal").on('click',function(e) {
            if(!$(e.target).closest('.modal__content').length && !$(e.target).closest('.staff__content').length) {
                $("#modal").fadeOut();
                $('.modal__content').fadeOut();
            }
        });
    }