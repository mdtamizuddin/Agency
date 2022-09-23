import { useState } from "react";

const Video = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="h-[300px] mt-20 lg:h-[500px] w-full rounded-md flex bg-opacity-10 justify-center items-center relative"
            style={{ backgroundImage: `url(https://images.ctfassets.net/freurdme1ae3/2HCYLUixcXQ9kKNo3P6TYL/410c2da5e5ce204f2ff32e965a9187db/Website-Design-new.jpeg?w=2048&h=1152&q=80&fit=fill&f=face)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div onClick={() => setShow(true)} className="absolute opacity-75 bg-slate-800 w-full h-full">

            </div>
            <button
                onClick={() => setShow(true)}
                className="bg-primary play-btn z-40 flex justify-center items-center rounded-full w-16 h-16 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="{2}">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
            {
                show && <ModalVideo setShow={setShow} />
            }
        </div>
    );
}

export default Video;
const ModalVideo = ({ setShow }) => {
    return (
        <>
            <div className="modal modal-open w-full" id="my-modal-2">
                <label htmlFor="my-modal-3" className="btn text-xl hover:text-red-700 btn-sm btn-circle absolute right-2 top-2" onClick={() => setShow(false)}>✕</label>
                <div className="lg:w-[1200px] w-full h-[480px] lg:h-[700px]  ">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/BDliEq_0qeQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}