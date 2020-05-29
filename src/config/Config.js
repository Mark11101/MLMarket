const envConfig = {
  windowResizeDebounceTime: 600,
}

class Config {
  windowResizeDebounceTime;

  constructor(data) {
    this.windowResizeDebounceTime = data.windowResizeDebounceTime;
  }

  set(key, value) {
    if (value) {
      (this[key]) = value;
    }
  }
}

const config = new Config(envConfig);

export default config
