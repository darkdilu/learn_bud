import React, { useEffect,useState } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import styles from "./EditProfile.module.css"; // Import CSS module
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNetworkRequest } from "../../CustomHooks/useNetworkRequest";
import profile1 from "../../assets/profile1.jpg"
import { useForm } from "react-hook-form";
const groupContacts = (contacts) => {
    console.log("contacts",contacts)
    const sortedContacts = contacts.sort((a, b) => a.savedProfile.Name.localeCompare(b.savedProfile.Name));
    return sortedContacts.reduce((acc, contact) => {
        const firstLetter = contact.savedProfile.Name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(contact);
        return acc;
    }, {});
};

const Shortlisted = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm()
    const [Files,setFiles] = useState([]);

    const handleFileChange=(e)=>{
        console.log(e.target.files[0]);
    }
    // const {data,error,sendRequest}= useNetworkRequest()
    // const[groupedContacts,setGroupedContacts] = useState(null)

    // useEffect(()=>{
    //      const fetchData = async () => {
    //         try {
    //             await sendRequest("/saved/getallsavedprofiles", "GET", undefined, null);
    //         } catch (error) {
    //             console.error("Failed to fetch data:", error);
    //         }
    //     };
    //     fetchData();
    // },[])

    // useEffect(() => {
    //     if (data) {
    //         const filteredData = data.profileObjs.filter(each => each.User);
    //         console.log(filteredData)
    //         const grouped = groupContacts(filteredData);
    //         setGroupedContacts(grouped);
    //     }
    // }, [data]);

    return (
        <>
        <Header />
        <div className={styles.app}>
            <div className={styles.contactList}>
                <div className={styles.profileContainer}>
                    <img src={profile1} alt="avatar" className={styles.profileImg}/>
                    <div>
                        <h1>Nizam</h1>
                        <span>Never give up</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia asperiores ad, officiis unde repellendus vero quam, quibusdam sit non modi perspiciatis dolorum ipsum quae voluptates dolorem alias iure commodi inventore numquam nostrum.
                </p>
                <div>
                    <form action="" className={styles.formItems}>
                        <input type="text" placeholder="Name" className={styles.input} {...register("Name")}/>
                        <input type="text" placeholder="User Name" className={styles.input} {...register("USerName")}/>
                        <input type="text" placeholder="Email" className={styles.input} {...register("Email")}/>
                        <input type="text" placeholder="Phone Number" className={styles.input} {...register("Contact")}/>
                        <input type="text" placeholder="Bio" className={styles.input} {...register("Bio")}/>
                        <div className={styles.filesContainer}> 
                            <img src={profile1} alt="profile1" className={styles.file}/>
                            <img src={profile1} alt="profile1" className={styles.file}/>
                            <input type="file" className={styles.addBtn} onChange={handleFileChange}/>
                        </div>
                        <div className={styles.filesContainer}> 
                            <img src={profile1} alt="profile1" className={styles.file}/>
                            <img src={profile1} alt="profile1" className={styles.file}/>
                            <button className={styles.addBtn}>Add</button>
                        </div>
                        <div className={styles.updateBtnContainer}>
                            <button className={styles.submitBtn} type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
   </> );
};

export default Shortlisted;
