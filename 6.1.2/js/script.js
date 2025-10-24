$(function(){
    function showSection(id){
        $('main > section, #home').hide();
        if(id==='home'){ 
            $('#home').show();
        }
        else { 
            $('#'+id).show(); 
        }
        $('.nav-btn').removeClass('active');
        $('.nav-btn[data-target="'+id+'"]').addClass('active');
        window.scrollTo({top:0,behavior:'smooth'});
    };
    $('.nav-btn').on('click',function(){ 
        showSection($(this).data('target')); 
    });
    $('[data-target]').on('click',function(e){ 
        var t=$(this).data('target'); if(t) showSection(t); 
    });
    $('.toggle-detail').on('click',function(){
        var id = $(this).data('id');
        $('#'+id).slideToggle(220);
    });
    $('#gallery-grid img').on('click',function(){
        var src = $(this).attr('src');
        $('#modal-content').html('<img src="'+src+'" alt="large">');
        $('#modal').fadeIn(180).attr('aria-hidden','false');
    });
    $('#close-modal,#modal').on('click',function(e){ 
        if(e.target.id==='modal' || e.target.id==='close-modal') $('#modal').fadeOut(120).attr('aria-hidden','true'); 
    });
    $('#register-form').on('submit',function(e){ 
        e.preventDefault(); $('#reg-msg').text('Cảm ơn! Đăng ký của bạn đã được ghi nhận.'); 
        $(this)[0].reset(); 
    });
    $('#contact-form').on('submit',function(e){ 
        e.preventDefault();
         $('#contact-msg').text('Cảm ơn! Tin nhắn đã được gửi.');
          $(this)[0].reset(); 
    });
    var audio = document.getElementById('bg-audio');
    $('#play-sound').on('click',function(){
        if(audio.paused){ 
            audio.play().catch(function(){ alert('Trình duyệt chặn phát tự động. Vui lòng click Play trên trình nghe.') });
            $(this).text('⏸ Tắt âm thanh'); 
        }
        else{ 
            audio.pause(); $(this).text('▶ Bật âm thanh'); 
        }
    });
      showSection('home');
});