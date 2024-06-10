import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { url } from 'inspector';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input ({required: true}) audioUrl!: string;
  




  ngAfterViewInit(){
    WaveSurfer.create({
     url: this.audioUrl,
     container:
    })


  }

}
