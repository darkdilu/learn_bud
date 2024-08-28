import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './buddyNavbar.css';

const BuddysNavbar = ({ navPage, setNavPage,showNotifications,showProfileOptions}) => {
    const [activeTab, setActiveTab] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setActiveTab(navPage);
    }, [navPage]);

    const handleTabClick = (tab, route) => {
        setActiveTab(tab);
        setNavPage(tab);
        navigate(route);
    };

    return (
        <div className={`header-container ${showNotifications || showProfileOptions? 'blur-background' : ''}`}>
            <div 
                className={`header-tab ${activeTab === 'Near by' ? 'active' : ''}`}
                onClick={() => handleTabClick('Near by', '/buddysHomePage')}
            >
                Near by
            </div>
            <div 
                className={`header-tab ${activeTab === 'Designation' ? 'active' : ''}`}
                onClick={() => handleTabClick('Education', '/educationSortedPage')}
            >
               Designation
            </div>
            <div 
                className={`header-tab ${activeTab === 'Qualification' ? 'active' : ''}`}
                onClick={() => handleTabClick('Qualification', '/QualificationSortedPage')}
            >
                Qualification
            </div>
        </div>
    );
};

export default BuddysNavbar;
