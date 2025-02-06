
import stream from "./file-stream.mjs";
import writableStream from "./file-writable-stream.mjs";
(async () => {
    for await(const res of stream) {
        console.log(res.toString());
    }
})()
writableStream.write("Hello\n ");
writableStream.write("World !!!");
writableStream.end();