function startAll() {
    const accel = new jacdac.microbitAccelerometer();
    let buttonA = new jacdac.microbitButton("buttonA", Button.A);
    let buttonB = new jacdac.microbitButton("buttonB", Button.B);
    let buttonAB = new jacdac.microbitButton("buttonAB", Button.AB);
    let soundLevel = new jacdac.microbitSoundLevel();
    accel.start();
    buttonA.start();
    buttonB.start();
    buttonAB.start();
    soundLevel.start();
}

startAll();

// TODO: SCREEN, temperature, light detector, microphone, compass, ...