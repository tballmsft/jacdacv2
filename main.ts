function startAll() {
    const accel = new jacdac.microbitAccelerometer();
    let buttonA = new jacdac.microbitButton("buttonA", Button.A);
    let buttonB = new jacdac.microbitButton("buttonB", Button.B);
    let buttonAB = new jacdac.microbitButton("buttonAB", Button.AB);
    accel.start();
    buttonA.start();
    buttonB.start();
    buttonAB.start();
}

startAll();

// TODO: SCREEN, temperature, light detector, microphone, compass, ...