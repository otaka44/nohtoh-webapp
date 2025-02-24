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
      0: { red: 216, green: 59, blue: 68 }, // #D83B44
      1: { red: 235, green: 157, blue: 95 }, // #EB9D5F
      2: { red: 226, green: 191, blue: 106 }, // #E2BF6A
      3: { red: 161, green: 193, blue: 88 }, // #A1C158
      4: { red: 42, green: 151, blue: 137 }, // #2A9789
      5: { red: 68, green: 119, blue: 150 }, // #447796
      6: { red: 27, green: 52, blue: 85 }, // #1B3455
      7: { red: 106, green: 87, blue: 119 }, // #1B3455（異なる色合い）
    };
    return colors[n];
  }
  get frontalAssociation(): {
    red: number;
    green: number;
    blue: number;
  } {
    const alpha = 0.04;
    const beta = 0.05;
    const gamma = 0.05;
    const exponent =
      -alpha * this.tWake - beta * this.tWork - gamma * this.tScreenTime;
    const result = 1 - Math.exp(exponent);

    if (result <= 0.4) {
      return this.getColor(7);
    } else if (result < 0.475) {
      return this.getColor(6);
    } else if (result < 0.55) {
      return this.getColor(5);
    } else if (result < 0.625) {
      return this.getColor(4);
    } else if (result < 0.7) {
      return this.getColor(3);
    } else if (result < 0.775) {
      return this.getColor(2);
    } else if (result < 0.85) {
      return this.getColor(1);
    } else if (result >= 0.85) {
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

    if (fl <= 0.12) {
      return this.getColor(7);
    } else if (fl < 0.24) {
      return this.getColor(6);
    } else if (fl < 0.36) {
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

    if (fl <= 0.12) {
      return this.getColor(7);
    } else if (fl < 0.24) {
      return this.getColor(6);
    } else if (fl < 0.36) {
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
}

export default BrainFatigueLevel;
