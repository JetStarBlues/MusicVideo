/*
 * Copyright 2013 Boris Smus. All Rights Reserved.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Interesting parameters to tweak!
var SMOOTHING = 0;
var FFT_SIZE = 2048;

function VisualizerSample() {
  this.analyser = context.createAnalyser();

  this.analyser.connect(context.destination);
  // this.analyser.minDecibels = -100000;
  // this.analyser.maxDecibels = 0;

  loadSounds(this, {
    //smaller file the better as takes a while to decode
    buffer: './sounds/AlexandreBergheau-Symptom.mp3' 
  });
    
  this.freqs = new Uint8Array(this.analyser.frequencyBinCount);

  this.isPlaying = false;
  //this.startTime = 0;
  //this.startOffset = 0;
}

// Toggle playback
VisualizerSample.prototype.togglePlayback = function() {
  if (this.isPlaying) {
    // Stop playback
        //this.source.noteOff(0);
          this.source.stop(0); //JK - compatability with Firefox

    // Save the position of the play head.
        //this.startOffset += context.currentTime - this.startTime;
        //console.log('paused at', this.startOffset);    
  } 

  else {
    //this.startTime = context.currentTime;
    //console.log('started at', this.startOffset);
    this.source = context.createBufferSource();
    
    // Connect graph
        this.source.connect(this.analyser);
        this.source.buffer = this.buffer;
        this.source.loop = true;

    // Start playback, but make sure we stay in bound of the buffer.
        //this.source.start(0, this.startOffset % this.buffer.duration);
          this.source.start(0, 0); //JK - start from beginning

    // Start visualizer.
        requestAnimFrame(this.draw.bind(this));
  }
  
  this.isPlaying = !this.isPlaying;
}

/*
  //JK
  Changed draw function to meet needs. Needed just the average frequency.
*/
VisualizerSample.prototype.draw = function() {
  this.analyser.smoothingTimeConstant = SMOOTHING;
  this.analyser.fftSize = FFT_SIZE;

  // Get the frequency data from the currently playing music
  this.analyser.getByteFrequencyData(this.freqs);

  var values = 0;
  for (var i = 0; i < this.freqs.length; i++) {
    values += this.freqs[i];
  }

  var average = values/this.freqs.length;
  // console.log("average is " + average);  //JK
  musicAvgFrequency = average;           //JK

  if (this.isPlaying) {
    requestAnimFrame(this.draw.bind(this));
  }
}


