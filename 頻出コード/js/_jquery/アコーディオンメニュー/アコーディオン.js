
    // アコーディオン機能
    {
        $(".faq__q").click(function(){
            const $this = $(this);
            const $parent = $this.parent(".faq__content");
            const $box = $this.siblings(".faq__box");
            
            if($parent.hasClass("faq__content_open")){
                $box.height("0px");
            }else{
                const boxH = $box.find(".faq__a").height();
                $box.height(boxH);
            }

            $parent.toggleClass("faq__content_open");
        });
    }