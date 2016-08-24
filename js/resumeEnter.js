/**
 * Created by Chris on 2016/4/3.
 */
$(function () {

  // 娣幢鐨勯樆姝㈤〉闈㈤€変腑鏁堟灉
  document.onmousedown=function () {
    document.onmousemove=function () {
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }
  }
  document.onmouseup=function () {
    document.onmousemove = null;
  }


  var $container = $('.portfolio-items');
  setTimeout(function () {
    $container.isotope({
      itemSelector : '.portfolio-items > div',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: true
      }
    });
  },1000)

  project_info();




  $('#resume').fullpage({
      sectionsColor: ['transparent', 'transparent', '#e4e4e4', 'rgba(255, 255, 255, .0)', 'transparent', 'transparent'],

      scrollingSpeed: 700,
      // 鏄惁棣栧熬鐩告帴
      // continuousVertical: true,
      normalScrollElementTouchThreshold: 5,
      // 瀵艰埅鏉℃樉绀�
      navigation: true,

      // 鍐呭瓒呭嚭鍚庢槸鍚﹀嚭鐜版粴鍔ㄦ潯
      scrollOverflow: false,
      // // 宸﹀彸婊戝潡寰幆
      loopHorizontal: false,
      // 宸﹀彸婊戝潡棰滆壊
      controlArrowColor:'#16BA9D',
      // 瀵艰埅鏍忚缃�
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
      menu: '#menu',
      easing: 'easeInOut',

      // 椤甸潰娓叉煋鍚庡洖璋�
      afterRender: function () {
        // page4 閫忔槑鑳屾櫙

        $('item-4').css('background', 'rgba(255, 255, 255, .1)');
        //渚ц竟瀵艰埅浜嬩欢
        var Tooltips = ['涓汉绠€鍘�', '鍩烘湰璧勬枡', '涓撲笟鎶€鑳�', '宸ヤ綔缁忓巻', '椤圭洰缁忛獙', '鑷垜璇勪环'];
        $("#fp-nav ul li").each(function (index) {
          this.dataset['toggle'] = 'tooltip';
          this.dataset['placement'] = 'left';
          $(this).attr('title', Tooltips[index])
        })
        $('[data-toggle="tooltip"]').tooltip();


        // 椤堕儴瀵艰埅鏍忚嚜鍔ㄤ細鎷変簨浠�
        if ($('.navbar-toggle').css('display') == 'block') {
          $('.navbar-collapse li').on('click', function () {
            $('.navbar-toggle').trigger('click');
          });
        }


        $('#fp-nav').addClass('hidden-xs');
        // 涓轰簡閬垮厤鏍囩澶鍚屼竴鏃堕棿鍔犺浇鐨勮瘽鍦ㄥ垰杞藉叆椤甸潰鏃跺€欎骇鐢熸€紓鎰燂紝鎵€鏈夊姩鐢诲厓绱犲垵濮嬮兘鏄痟idden鐨�

        $('.item-1 .next-page').on('click', function () {
          $.fn.fullpage.moveSectionDown();
        });
        setTimeout(function () {
          $('.item-1 .corner').show();
          $('.resume-hide').show();
        }, 500);
      },

      // 婊氬姩瑙﹀彂鍚庣粨鏉熷墠鍥炶皟
      onLeave: function (index, nextIndex, direction) {

        if(nextIndex==4){
          $('.pure').hide();
          $('.sky').show();
        }

        if(nextIndex==6){
          $('.sky').hide();
        }else {
            $('.item-6 .top').animate({'height': '50%'},400);
            $('.item-6 .foot').animate({'height': '50%'},400);
        }


        switch (index) {
          case 1:
            $('.item-1 .corner').hide();
            $('.resume-hide').hide();
            $('.navbar').removeClass('black');

            break;

          case 2:
            if (direction == 'down') {
              $('.item-2 .icon-infomation').addClass('zoomOutUp');
              setTimeout(function () {
                $('.item-2 .icon-infomation').removeClass('zoomOutUp');
                $('.item-2 .container').hide();
              }, 500);
            } else {
              $('.item-2 .container').hide();
            }
            break;

          case 3:
            $('.item-3 .container').hide();
            $('.navbar').removeClass('blue');
            break;

          case 4:
          {
            $('.item-4 .container').hide();
            break;
          }
          case 6:{

          }
        }
      },

      // 婊氬姩缁撴潫鍚庡洖璋�
      afterLoad: function (anchorLink, index) {
      if(index==6)
        $('.pure').show();

        switch (anchorLink) {
          case 'page1':
            $('.item-1 .corner').show();
            $('.resume-hide').show();
            $('.navbar').addClass('black');
            break;
          case 'page2':
            $('.item-2 .container').show();
            break;
          case 'page3':
            $('.navbar').addClass('blue');
            $('.item-3 .container').show();

            break;
          case 'page4':
            $('.item-4 .container').show();
            break;

          case 'page5':
            break;

          case 'page6':
            setTimeout(function () {
              $('.item-6 .top').animate({'height': '30%'},400);
              $('.item-6 .foot').animate({'height': '30%'},400);
            },500)

            break;
        }
      },

    // 姘村钩婊戝潡鍥炶皟
      onSlideLeave: function (anchorLink,index,slideIndex,direction) {
          // if(slideIndex==0){
            project_info();
          // }
      },

      // 姘村钩婊戝潡鍥炶皟
      afterSlideLoad: function (anchorLink,index,slideIndex) {
      }
    }
  )


})


