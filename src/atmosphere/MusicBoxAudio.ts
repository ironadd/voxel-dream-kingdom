/**
 * 纯代码 Web Audio API 梦幻水晶八音盒合成器（零外部音频依赖）
 * 演奏温柔治愈的大调七和弦童话琶音
 */
export class MusicBoxAudio {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private step = 0;

  // F Lydian / C Major9 梦幻童话音阶旋律序列（频率 Hz）
  private readonly melodyNotes = [
    523.25, 659.25, 783.99, 987.77, // C5 E5 G5 B5
    880.0, 659.25, 523.25, 587.33,  // A5 E5 C5 D5
    440.0, 523.25, 659.25, 880.0,   // A4 C5 E5 A5
    783.99, 659.25, 587.33, 523.25, // G5 E5 D5 C5
    349.23, 440.0, 523.25, 659.25,  // F4 A4 C5 E5
    783.99, 659.25, 523.25, 440.0,  // G5 E5 C5 A4
    392.0, 493.88, 587.33, 783.99,  // G4 B4 D5 G5
    659.25, 587.33, 493.88, 392.0,  // E5 D5 B4 G4
  ];

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start(): void {
    if (this.isPlaying) return;
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.playTick();
    this.timerId = window.setInterval(() => this.playTick(), 430);
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private playTick(): void {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const freq = this.melodyNotes[this.step % this.melodyNotes.length];

    // 主八音盒泛音正弦波 + 清脆高八度泛音点缀
    this.pluckNote(freq, now, 0.08, 1.9);
    if (this.step % 4 === 0) {
      this.pluckNote(freq * 0.5, now, 0.045, 2.6);
    }
    if (this.step % 8 === 2) {
      this.pluckNote(freq * 2, now + 0.02, 0.022, 1.2);
    }

    this.step++;
  }

  private pluckNote(freq: number, startTime: number, peakGain: number, duration: number): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }
}
