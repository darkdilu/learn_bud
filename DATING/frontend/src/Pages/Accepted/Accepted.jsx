import React, { useEffect, useState } from "react";
import styles from "./Accept.module.css";
import { FaPhone, FaVideo } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNetworkRequest } from "../../CustomHooks/useNetworkRequest";

const Accepted = () => {
    const {data,error,sendRequest}= useNetworkRequest()
    const[groupedContacts,setGroupedContacts] = useState(null)

    useEffect(()=>{
         const fetchData = async () => {
            try {
                await sendRequest("/request/getallrequests", "GET", undefined, null);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        fetchData();
    },[])

    useEffect(() => {
        if (data) {
            const filteredData = data.requestObjs.filter(each => each.status==="Accepted");
            setGroupedContacts(filteredData);
        }
    }, [data]);
    return (
        <>
        <Header />
        <div className={styles.app}>
            <div className={styles.contactList}>
            <div className={styles.contactListContent}>
                    {groupedContacts&&groupedContacts.map((contact, index) => (
                        <div key={index} className={styles.contactItem}>
                            <img src={contact.imgSrc} alt={contact.name} className={styles.contactImg} />
                            <div className={styles.contactInfo}>
                                <p className={styles.contactName}>{contact.sender?contact.receiverId.Name:contact.senderId.Name}</p>
                                <p className={styles.contactDate}>{contact.date}</p>
                            </div>
                            <div className={styles.contactActions}>
                                <FaPhone className={styles.callIcon} />
                                <FaVideo className={styles.videoIcon} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
   </> );
};

export default Accepted;
