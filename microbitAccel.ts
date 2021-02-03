namespace jacdac {
    export class microbitAccelerometer extends jacdac.SensorHost {
        constructor() {
            super("microbitAccel", SRV_ACCELEROMETER)
        }

        /**
         * Indicates the current forces acting on accelerometer.
         *
         * ```
         * const [x, y, z] = jdunpack<[number, number, number]>(buf, "i6.10 i6.10 i6.10")
         * ```
         */
        // Forces = 0x101,
        public handleCustomCommand(packet: JDPacket) {
            if (packet.is_command && packet.service_command == AccelerometerReg.Forces) {
                // pack up the accelerometer (x,y,z) and send them out
                let ax = input.acceleration(Dimension.X);
                let ay = input.acceleration(Dimension.Y);
                let az = input.acceleration(Dimension.Z);
                // convert them
                // pack them
                // send them out
            }
        }
        // streaming???
    }
}

const accel = new jacdac.microbitAccelerometer();