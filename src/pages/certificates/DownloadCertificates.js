import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase'
import CertificateCard from './CertificateCard';
function DownloadCertificates() {
    const [loader, setLoader] = useState(false);
    const [roll, setRoll] = useState('');
    const [certificate, setCertificates] = useState([]);

    const searchCertificate = async (e) => {
        e.preventDefault()
        setLoader(true);
        const ref = collection(db, "certificates");
        const q = query(ref, where("roll", "==", roll));
        const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     setCertificates(doc.data()); 
        // });
        const cert = []
        querySnapshot.forEach((doc) => {
            return cert.push({
                id: doc.id,
                data: doc.data(),
            })
        })
        setCertificates(cert);
        setLoader(false);
        console.table(certificate);
    }
    return (
        <>
            <section className='dark:bg-[#181F2A]'>

                <div className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Download your <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Event</span> Certificates</h2>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Download your certificate if you ever won the any event an prize/position</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                        <form>
                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="roll" placeholder="Enter your Roll Number" aria-label="Enter your Roll" value={roll} onChange={e => setRoll(e.target.value)} />

                                <button type='submit' className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none" onClick={searchCertificate}>{loader ? "Searching" : "Download"}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='py-2'>
                    <h1 className='text-center text-gray-400 text-xl'>Your certificates display here </h1>
                    <div className='px-8'>
                        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {certificate.map((item) => {
                                return <CertificateCard key={item.id} data={item.data} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadCertificates