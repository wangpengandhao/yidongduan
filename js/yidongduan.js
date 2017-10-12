window.addEventListener('load',function(){
	let ul=document.querySelector('ul');
	let dian=document.querySelectorAll('.dian div');
	let dx=window.innerWidth;
	let num=0,newn=0,next=0;
	ul.addEventListener('touchstart',function(e){
		ul.style.transition='none';
		if(num==-0){
			ul.style.left=`${-4*dx}px`;
		}
		if(num==-7){
			ul.style.left=`${-3*dx}px`;
		}
		let startx=this.offsetLeft;
		let cx=e.changedTouches[0].pageX;
		ul.addEventListener('touchmove',function(e){
			ul.style.transition='none';			
			let ox=e.changedTouches[0].pageX;
			let left=startx+ox-cx;
			ul.style.left=`${left}px`;
			// if(next>4){
			// 	next=0;
			// }	
			// next++;
			newn=Math.abs(num%4);
			dian[newn].style.background='skyblue';
		})
	})
	ul.addEventListener('touchend',function(e){
		let endx=this.offsetLeft;
		num=Math.round(endx/dx);
		ul.style.transition='all ease .5s'; 
		ul.style.left=`${num*dx}px`;		
		dian[newn].style.background='#fff';
		// newn=next;
	})
})
