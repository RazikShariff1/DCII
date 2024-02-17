function sequence_animation() {
    const canvas = document.querySelector('#home>canvas');
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `
      imgseq/ezgif-frame-006-fococlipping-HD.png
      imgseq/ezgif-frame-007-fococlipping-HD.png
      imgseq/ezgif-frame-008-fococlipping-HD.png
      imgseq/ezgif-frame-009-fococlipping-HD.png
      imgseq/ezgif-frame-010-fococlipping-HD.png
      imgseq/ezgif-frame-011-fococlipping-HD.png
      imgseq/ezgif-frame-012-fococlipping-HD.png
      imgseq/ezgif-frame-013-fococlipping-HD.png
      imgseq/ezgif-frame-014-fococlipping-HD.png
      imgseq/ezgif-frame-015-fococlipping-HD.png
      imgseq/ezgif-frame-016-fococlipping-HD.png
      imgseq/ezgif-frame-017-fococlipping-HD.png
      imgseq/ezgif-frame-024-fococlipping-HD.png
      imgseq/ezgif-frame-025-fococlipping-HD.png
      imgseq/ezgif-frame-026-fococlipping-HD.png
      imgseq/ezgif-frame-027-fococlipping-HD.png
      imgseq/ezgif-frame-028-fococlipping-HD.png
      imgseq/ezgif-frame-029-fococlipping-HD.png
      imgseq/ezgif-frame-030-fococlipping-HD.png 
      imgseq/ezgif-frame-031-fococlipping-HD.png
      imgseq/ezgif-frame-032-fococlipping-HD.png
      imgseq/ezgif-frame-033-fococlipping-HD.png
      imgseq/ezgif-frame-034-fococlipping-HD.png
      imgseq/ezgif-frame-035-fococlipping-HD.png
      imgseq/ezgif-frame-036-fococlipping-HD.png
      imgseq/ezgif-frame-037-fococlipping-HD.png
      imgseq/ezgif-frame-038-fococlipping-HD.png
      imgseq/ezgif-frame-039-fococlipping-HD.png
      imgseq/ezgif-frame-040-fococlipping-HD.png 
      imgseq/ezgif-frame-041-fococlipping-HD.png
      imgseq/ezgif-frame-042-fococlipping-HD.png
      imgseq/ezgif-frame-043-fococlipping-HD.png
      imgseq/ezgif-frame-044-fococlipping-HD.png
      imgseq/ezgif-frame-045-fococlipping-HD.png
      imgseq/ezgif-frame-046-fococlipping-HD.png
      imgseq/ezgif-frame-047-fococlipping-HD.png
      imgseq/ezgif-frame-048-fococlipping-HD.png
      imgseq/ezgif-frame-049-fococlipping-HD.png
      imgseq/ezgif-frame-050-fococlipping-HD.png 
      imgseq/ezgif-frame-051-fococlipping-HD.png
      imgseq/ezgif-frame-052-fococlipping-HD.png
      imgseq/ezgif-frame-053-fococlipping-HD.png
      imgseq/ezgif-frame-054-fococlipping-HD.png
      imgseq/ezgif-frame-055-fococlipping-HD.png
      imgseq/ezgif-frame-056-fococlipping-HD.png
      imgseq/ezgif-frame-057-fococlipping-HD.png
      imgseq/ezgif-frame-058-fococlipping-HD.png
      imgseq/ezgif-frame-059-fococlipping-HD.png
      imgseq/ezgif-frame-060-fococlipping-HD.png 
      imgseq/ezgif-frame-061-fococlipping-HD.png
      imgseq/ezgif-frame-062-fococlipping-HD.png
      imgseq/ezgif-frame-063-fococlipping-HD.png
      imgseq/ezgif-frame-064-fococlipping-HD.png
      imgseq/ezgif-frame-065-fococlipping-HD.png
      imgseq/ezgif-frame-066-fococlipping-HD.png
      imgseq/ezgif-frame-067-fococlipping-HD.png
      imgseq/ezgif-frame-068-fococlipping-HD.png
      imgseq/ezgif-frame-069-fococlipping-HD.png
      imgseq/ezgif-frame-070-fococlipping-HD.png 
      imgseq/ezgif-frame-071-fococlipping-HD.png
      imgseq/ezgif-frame-072-fococlipping-HD.png
      imgseq/ezgif-frame-073-fococlipping-HD.png
      imgseq/ezgif-frame-074-fococlipping-HD.png
      imgseq/ezgif-frame-075-fococlipping-HD.png
      imgseq/ezgif-frame-076-fococlipping-HD.png
      imgseq/ezgif-frame-077-fococlipping-HD.png
      imgseq/ezgif-frame-078-fococlipping-HD.png
      imgseq/ezgif-frame-079-fococlipping-HD.png
      imgseq/ezgif-frame-080-fococlipping-HD.png 
      imgseq/ezgif-frame-081-fococlipping-HD.png
      imgseq/ezgif-frame-082-fococlipping-HD.png
      imgseq/ezgif-frame-083-fococlipping-HD.png
      imgseq/ezgif-frame-084-fococlipping-HD.png
      imgseq/ezgif-frame-085-fococlipping-HD.png
      imgseq/ezgif-frame-086-fococlipping-HD.png
      imgseq/ezgif-frame-087-fococlipping-HD.png
      imgseq/ezgif-frame-088-fococlipping-HD.png
      imgseq/ezgif-frame-089-fococlipping-HD.png
      imgseq/ezgif-frame-090-fococlipping-HD.png 
      imgseq/ezgif-frame-091-fococlipping-HD.png
      imgseq/ezgif-frame-092-fococlipping-HD.png
      imgseq/ezgif-frame-093-fococlipping-HD.png
      imgseq/ezgif-frame-094-fococlipping-HD.png
      imgseq/ezgif-frame-095-fococlipping-HD.png
      imgseq/ezgif-frame-096-fococlipping-HD.png
      imgseq/ezgif-frame-097-fococlipping-HD.png
      imgseq/ezgif-frame-098-fococlipping-HD.png
      imgseq/ezgif-frame-099-fococlipping-HD.png
      imgseq/ezgif-frame-100-fococlipping-HD.png
      imgseq/ezgif-frame-101-fococlipping-HD.png
      imgseq/ezgif-frame-102-fococlipping-HD.png
      imgseq/ezgif-frame-103-fococlipping-HD.png
      imgseq/ezgif-frame-104-fococlipping-HD.png
      imgseq/ezgif-frame-105-fococlipping-HD.png
      imgseq/ezgif-frame-106-fococlipping-HD.png
      imgseq/ezgif-frame-107-fococlipping-HD.png
      imgseq/ezgif-frame-108-fococlipping-HD.png
      imgseq/ezgif-frame-109-fococlipping-HD.png
      imgseq/ezgif-frame-110-fococlipping-HD.png 
      imgseq/ezgif-frame-111-fococlipping-HD.png
      imgseq/ezgif-frame-112-fococlipping-HD.png
      imgseq/ezgif-frame-113-fococlipping-HD.png
      imgseq/ezgif-frame-114-fococlipping-HD.png
      imgseq/ezgif-frame-115-fococlipping-HD.png
      imgseq/ezgif-frame-116-fococlipping-HD.png
      imgseq/ezgif-frame-117-fococlipping-HD.png
      imgseq/ezgif-frame-118-fococlipping-HD.png
      imgseq/ezgif-frame-119-fococlipping-HD.png
      imgseq/ezgif-frame-120-fococlipping-HD.png 
      imgseq/ezgif-frame-121-fococlipping-HD.png
      imgseq/ezgif-frame-122-fococlipping-HD.png
      imgseq/ezgif-frame-123-fococlipping-HD.png
      imgseq/ezgif-frame-124-fococlipping-HD.png
      imgseq/ezgif-frame-125-fococlipping-HD.png
      imgseq/ezgif-frame-126-fococlipping-HD.png
      imgseq/ezgif-frame-127-fococlipping-HD.png
      imgseq/ezgif-frame-128-fococlipping-HD.png
      imgseq/ezgif-frame-129-fococlipping-HD.png
      imgseq/ezgif-frame-130-fococlipping-HD.png 
      imgseq/ezgif-frame-131-fococlipping-HD.png
      imgseq/ezgif-frame-132-fococlipping-HD.png
      imgseq/ezgif-frame-133-fococlipping-HD.png
      imgseq/ezgif-frame-134-fococlipping-HD.png
      imgseq/ezgif-frame-135-fococlipping-HD.png
      imgseq/ezgif-frame-136-fococlipping-HD.png
      imgseq/ezgif-frame-137-fococlipping-HD.png
      imgseq/ezgif-frame-138-fococlipping-HD.png
      imgseq/ezgif-frame-139-fococlipping-HD.png
      imgseq/ezgif-frame-140-fococlipping-HD.png
    `;
      return data.split('\n')[index];
    }
  
    const frameCount = 130;
  
    const images = [];
    const imageSeq = {
      frame: 0,
    };
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 1.8,
        pin: true,
        trigger: '#home',
      },
      onUpdate: render,
    });
  
    images[0].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
}
  
sequence_animation();