import DrumPad from "./DrumPad";
import { PADS } from "./PADS";

export default function DrumMachine () {
    return (
        <div className="flex justify-center mt-20">
            <div className="grid grid-cols-4 gap-2">
                {PADS.map((pad) => (
                <DrumPad
                    key={pad.id}
                    pad={pad}
                />
                ))}
            </div>
        </div>
    );
}

;