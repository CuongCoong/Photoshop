import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flame-image',
  templateUrl: './flame-image.component.html',
  styleUrls: ['./flame-image.component.scss']
})
export class FlameImageComponent implements OnInit {

  constructor() { }

  @ViewChild('tuiRef')
  private _tuiRef!: ElementRef<HTMLDivElement>;
  canvas: any;
  ctx: any;
  image: any;
  type:any;

  ngOnInit(): void {
    // this.canvas = document.getElementById('canvas_frame');
    // this.ctx = (this.canvas as HTMLCanvasElement).getContext('2d');
  }
  ngAfterViewInit(){
    this.canvas = document.getElementById('canvas_frame');
    this.ctx = (this.canvas as HTMLCanvasElement).getContext('2d');
  }

  loadFrame(type: any) {

    let idFrame = "";
    if(type == 'frame1') {
      this.type = type;
      idFrame  = "img_frame";
    } else if (type == 'frame2') {
      this.type = type;
      idFrame = 'img_frame2';
    } else if(type == 'frame3') {
      this.type = type;
      idFrame = 'img_frame3';
    } else if(type == 'frame4') {
      this.type = type;
      idFrame = 'img_frame4';
    }
    else if(type == 'frame5') {
      this.type = type;
      idFrame = 'img_frame5';
    }
    else if(type == 'frame6') {
      this.type = type;
      idFrame = 'img_frame6';
    }
    else if(type == 'frame7') {
      this.type = type;
      idFrame = 'img_frame7';
    }
    else if(type == 'frame8') {
      this.type = type;
      idFrame = 'img_frame8';
    }

      let img: any = document.getElementById(idFrame);
      this.canvas.width = 1700;
      this.canvas.height = 1200;
      let w = this.canvas.width / img.width;
      let h = this.canvas.height / img.height;
      let ratio = Math.min(h, w)
      this.ctx?.drawImage(img, 0, 0, img.width*ratio, img.height*ratio);

  }

  uploadImage(data: any){

    if(this.type == 'frame1') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1400;
      image.height = 800;

      // let w = this.canvas.width / image.width;
      // let h = this.canvas.height / image.height;
      // let ratio = Math.min(h, w)
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 150, 200, image.width, image.height);
      });
    } else if (this.type == 'frame2') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1000;
      image.height = 670;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 328, 240, image.width, image.height);
      });
    } else if (this.type == 'frame3') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1080;
      image.height = 800;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 255, 180, image.width, image.height);
      });
    } else if (this.type == 'frame4') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1400;
      image.height = 1000;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 100, 100, image.width, image.height);
      });
    } else if (this.type == 'frame5') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1160;
      image.height = 730;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 255, 230, image.width, image.height);
      });
    } else if (this.type == 'frame6') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1078;
      image.height = 828;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 190, 190, image.width, image.height);
      });
    } else if (this.type == 'frame7') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1400;
      image.height = 1050;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 80, 80, image.width, image.height);
      });
    }
    else if (this.type == 'frame8') {
      // console.log(data.target.files[0]);
      const imageDataURL = URL.createObjectURL(data.target.files[0])
      let image = new Image();
      image.src = imageDataURL;
      image.width = 1350;
      image.height = 950;
      image.addEventListener("load", () => {
        this.ctx?.drawImage(image, 150, 115, image.width, image.height);
      });
    }
  }


  download(){
    let a = document.createElement('a');
    a.href = this.canvas.toDataURL("image/jpg");
    a.download = 'image-frame.jpeg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

