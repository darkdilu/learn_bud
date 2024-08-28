import React, { useEffect, useState } from "react";
import styles from "./Rejected.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNetworkRequest } from "../../CustomHooks/useNetworkRequest";

const groupContacts = (contacts) => {
    const sortedContacts = contacts.sort((a, b) => a.senderId.Name.localeCompare(b.senderId.Name));
    return sortedContacts.reduce((acc, contact) => {
        const firstLetter = contact.senderId.Name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(contact);
        return acc;
    }, {});
};

const Rejected = () => {

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
            const filteredData = data.requestObjs.filter(each => !(each.sender)&&each.status==="Rejected");
            console.log(data)
            const grouped = groupContacts(filteredData);
            setGroupedContacts(grouped);
        }
    }, [data]);

    return (
        <>
        <Header />
        <div className={styles.app}>
            <div className={styles.contactList}>
                {groupedContacts&&Object.keys(groupedContacts).map((letter) => (
                    <div key={letter} className={styles.contactGroup}>
                        <div className={styles.contactGroupLetter}>{letter}</div>
                        {groupedContacts[letter].map((contact, index) => (
                            <div key={index} className={styles.contactItem}>
                                <img src={contact.imgSrc} alt={contact.name} className={styles.contactImg} />
                                <div className={styles.contactInfo}>
                                    <p className={styles.contactName}>{contact.senderId.Name}</p>
                                    <p className={styles.contactDate}>{contact.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <Footer />
  </>  );
};

export default Rejected;
