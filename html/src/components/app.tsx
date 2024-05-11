import { h, Component } from "preact";

import { Terminal } from "./terminal";

import type { ITerminalOptions, ITheme } from "@xterm/xterm";
import type { ClientOptions, FlowControl } from "./terminal/xterm";

const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const path = window.location.pathname.replace(/[/]+$/, "");
const wsUrl = [protocol, "//", window.location.host, path, "/ws", window.location.search].join("");
const tokenUrl = [window.location.protocol, "//", window.location.host, path, "/token"].join("");
const clientOptions = {
    rendererType: "webgl",
    disableLeaveAlert: false,
    disableResizeOverlay: false,
    enableZmodem: false,
    enableTrzsz: false,
    enableSixel: false,
    isWindows: false,
    unicodeVersion: "11",
} as ClientOptions;
const termOptions = {
    fontSize: 22,
    fontFamily: "JetBrains,Consolas,Liberation Mono,Menlo,Courier,monospace",
    theme: {
        foreground: "#ffffff",
        background: "#000000",
        cursor: "#ffffff",
        black: "#000000",
        red: "#ff8059",
        green: "#44bc44",
        yellow: "#d0bc00",
        blue: "#2fafff",
        magenta: "#feacd0",
        cyan: "#00d3d0",
        white: "#bfbfbf",
        brightBlack: "#595959",
        brightRed: "#ef8b50",
        brightGreen: "#70b900",
        brightYellow: "#c0c530",
        brightBlue: "#79a8ff",
        brightMagenta: "#b6a0ff",
        brightCyan: "#6ae4b9",
        brightWhite: "#ffffff",
    } as ITheme,
    allowProposedApi: true,
} as ITerminalOptions;
const flowControl = {
    limit: 100000,
    highWater: 10,
    lowWater: 4,
} as FlowControl;

export class App extends Component {
    render() {
        return (
            <Terminal
                id="terminal-container"
                wsUrl={wsUrl}
                tokenUrl={tokenUrl}
                clientOptions={clientOptions}
                termOptions={termOptions}
                flowControl={flowControl}
            />
        );
    }
}
