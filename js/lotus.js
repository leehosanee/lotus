$(document).ready(function(){
	
	//���ʸ޴� ȣ��
	$("nav li").hover(function(){
			$(this).children("nav").stop().slideDown();
	},function(){
		$(this).children("nav").stop().slideUp();
	});//�޴�ȣ����
	
	//���̽� �����̵� (�ڵ�)
	const x=setInterval( y, 2800);
	let i=3;
	function y(){
		i--;
		if(i==0){
			$("#slide a").fadeIn();
			i=3;
		}else{
			$("#slide a").eq(i).fadeOut();
		}
	}//�����̵� ��
	
	//�������� ù���� �ؽ�Ʈ Ŭ���� �˾� ���
	$(".pop").click(function(){
			$("popup").fadeIn();
	});
	
	//�˾� ��� '�ݱ�'��ư Ŭ����
	$("#popup button").click(function(){
			$("#popup").fadeOut();
	});
	
});////end