import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import '../../shared/Shared.css'
import { BottomLine } from "../../components/atoms";

const About = () => {
    return (
        <div className="parent pt-16 my-16">
            <div className="">
                <motion.div
                    className="mb-10"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, type: "spring" },
                    }}
                >
                    <h3 className="text-neutral text-center">Apa itu SiPeKa ?</h3>
                    <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent">
                        Tentang <span className="text-primary">Kami</span>
                    </h1>
                    <BottomLine />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 1, delay: 1.25 },
                        }}
                    >
                        <img
                            src="https://res.cloudinary.com/du541igfh/image/upload/v1688074612/Blog%20Portfolio%20Gilbert/Project/mern-penggajian-karyawan/abouthkspt_iqdn4r.png"
                            alt="About HKS"
                            className="w-200 h-200 transform translate-y-[-12%]"
                            title="About HKS"
                        />

                    </motion.div>
                    <motion.div
                        className=""
                        initial={{ x: 200, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 1, delay: 1.25 },
                        }}
                    >
                        <p className=" font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
                            SiPeKa (Sistem Penggajian Karyawan) adalah suatu sistem yang digunakan oleh perusahaan untuk mengelola proses penggajian karyawan secara efisien dan akurat.
                            Sistem ini memainkan peran kunci dalam mengotomatisasi berbagai tugas terkait penggajian, seperti perhitungan gaji, pemrosesan absensi, dan pembayaran upah karyawan.
                        </p>
                        <br />
                        <p className="font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
                            Dalam SiPeKa, informasi karyawan seperti data pribadi, jabatan, dan tingkat gaji disimpan secara terpusat.
                            Setiap bulan, sistem akan mengambil data absensi karyawan dan melakukan perhitungan gaji berdasarkan informasi yang ada.
                            Hal ini mencakup faktor-faktor seperti jam kerja, cuti, lembur, dan potongan yang relevan.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;