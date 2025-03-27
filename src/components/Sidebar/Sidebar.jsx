import React from "react";
import styled from "styled-components";
import { FaUserInjured, FaBed, FaMoneyBillWave, FaFileMedical, FaTruck, FaUserTie, FaPills } from "react-icons/fa";
import { MdMiscellaneousServices, MdCampaign, MdFeedback } from "react-icons/md";
import { GiHospitalCross } from "react-icons/gi";
import { BiTestTube } from "react-icons/bi";
import wellnestlogo from "../../assets/wellnest.png"

const SidebarContainer = styled.div`
  width: 20rem;
  height: 100vh;
  background-color: var(--color-grey-50);
  padding-top: 1rem;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-family-wide);
`;

const SidebarTitle = styled.h4`
  font-family: var(--font-family-wide);
  font-size: var(--font-size-5x);
  color: var(--color-blue-1000);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const StyledImage = styled.img`
width: 1.5rem;
height: 1.5rem;
mix-blend-mode: multiply;
`;

const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SidebarLink = styled.a`
  color: var(--color-grey-500);
  text-decoration: none;
  font-size: var(--font-size-4x);
  padding: 0.8rem 1rem;
  width: 16rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem; 
  border-radius: 10rem;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: var(--color-aqua-500);
    color: var(--color-blue-1000);
    justify-content: center;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>
        <StyledImage src={wellnestlogo} alt="WellNest Logo" />
        WellNest
      </SidebarTitle>
      <SidebarBody>
        <SidebarLink to="#"><FaUserInjured size="1.5em" /><span>Patients</span></SidebarLink>
        <SidebarLink to="#"><FaBed size="1.5em" /><span>Rooms</span></SidebarLink>
        <SidebarLink to="#"><MdMiscellaneousServices size="1.5em" /><span>Utility</span></SidebarLink>
        <SidebarLink to="#"><GiHospitalCross size="1.5em" /><span>Equipment</span></SidebarLink>
        <SidebarLink to="#"><MdCampaign size="1.5em" /><span>Marketing</span></SidebarLink>
        <SidebarLink to="#"><FaMoneyBillWave size="1.5em" /><span>Revenue</span></SidebarLink>
        <SidebarLink to="#"><BiTestTube size="1.5em" /><span>Lab Test</span></SidebarLink>
        <SidebarLink to="#"><FaFileMedical size="1.5em" /><span>Insurance</span></SidebarLink>
        <SidebarLink to="#"><FaTruck size="1.5em" /><span>Logistic</span></SidebarLink>
        <SidebarLink to="#"><FaUserTie size="1.5em" /><span>Employee</span></SidebarLink>
        <SidebarLink to="#"><MdFeedback size="1.5em" /><span>Feedback</span></SidebarLink>
        <SidebarLink to="#"><FaPills size="1.5em" /><span>Pharmacy</span></SidebarLink>
      </SidebarBody>
    </SidebarContainer>
  );
};

export default Sidebar;
