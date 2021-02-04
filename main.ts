function startAll() {
    const accel = new microbit.Accelerometer();
    let buttonA = new microbit.MButton("buttonA", Button.A);
    let buttonB = new microbit.MButton("buttonB", Button.B);
    let buttonAB = new microbit.MButton("buttonAB", Button.AB);
    let soundLevel = new microbit.SoundLevel();
    let lightLevel = new microbit.LightLevel();
    accel.start();
    buttonA.start();
    buttonB.start();
    buttonAB.start();
    soundLevel.start();
    lightLevel.start();
}

startAll();

// TODO: SCREEN, temperature, light detector, microphone, compass, ...