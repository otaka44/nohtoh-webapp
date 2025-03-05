class BrainFatigueLevel {
  tWake: number;
  tWork: number;
  tScreenTime: number;
  tMusic: number;
  soundLevel: number;
  constructor(
    tWake: number,
    tWork: number,
    tScreenTime: number,
    tMusic: number,
    soundLevel: number
  ) {
    this.tWake = tWake;
    this.tWork = tWork;
    this.tScreenTime = tScreenTime;
    this.tMusic = tMusic;
    this.soundLevel = soundLevel;
  }
  getColor(n: number): {
    red: number;
    green: number;
    blue: number;
  } {
    const colors: {
      [key: number]: { red: number; green: number; blue: number };
    } = {
      0: { red: 255, green: 1, blue: 1 }, // #ff0101
      1: { red: 255, green: 20, blue: 147 }, // #FF1493
      2: { red: 255, green: 216, blue: 0 }, // #FFD800
      3: { red: 1, green: 255, blue: 1 }, // #01ff01
      4: { red: 1, green: 1, blue: 255 }, // #0101ff
      5: { red: 255, green: 255, blue: 255 }, // #ffffff（異なる色合い）
    };
    return colors[n];
  }
  get frontalAssociation(): {
    red: number;
    green: number;
    blue: number;
  } {
    const alpha = 0.06;
    const beta = 0.05;
    const gamma = 0.05;
    const exponent =
      -alpha * this.tWake - beta * this.tWork - gamma * this.tScreenTime;
    const result = 1 - Math.exp(exponent);

    if (result <= 0.72) {
      return this.getColor(5);
    } else if (result < 0.72) {
      return this.getColor(4);
    } else if (result < 0.75) {
      return this.getColor(3);
    } else if (result < 0.79) {
      return this.getColor(2);
    } else if (result < 0.84) {
      return this.getColor(1);
    } else if (result >= 0.84) {
      return this.getColor(0);
    }
    // resultが比較できない場合、getColor(5)を返す
    return this.getColor(5);
  }
  get auditory(): {
    red: number;
    green: number;
    blue: number;
  } {
    const k = 3.952847075210474e-10;
    const fl = k * this.tMusic * Math.pow(10, this.soundLevel / 10);

    if (fl <= 0.36) {
      return this.getColor(5);
    } else if (fl < 0.48) {
      return this.getColor(4);
    } else if (fl < 0.6) {
      return this.getColor(3);
    } else if (fl < 0.72) {
      return this.getColor(2);
    } else if (fl < 0.84) {
      return this.getColor(1);
    } else if (fl >= 1.0) {
      return this.getColor(0);
    }
    return this.getColor(4);
  }
  get visual(): {
    red: number;
    green: number;
    blue: number;
  } {
    const k = 0.28312; // k = 1.0 * (luminance+1) / (12 / distanceScreen**2)
    const luminance = 150;
    const distanceScreen = 0.15;
    const fl =
      (k / (luminance + 1)) * (this.tScreenTime / Math.pow(distanceScreen, 2));

    if (fl <= 0.1) {
      return this.getColor(5);
    } else if (fl < 0.4) {
      return this.getColor(4);
    } else if (fl < 0.6) {
      return this.getColor(3);
    } else if (fl < 0.72) {
      return this.getColor(2);
    } else if (fl < 0.84) {
      return this.getColor(1);
    } else if (fl >= 0.72) {
      return this.getColor(0);
    }
    return this.getColor(4);
  }
}

export default BrainFatigueLevel;
