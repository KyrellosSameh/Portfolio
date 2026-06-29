import { type JSX } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap, 
  FaGitAlt, 
  FaFigma, 
  FaPuzzlePiece, 
  FaComments, 
  FaLayerGroup, 
  FaUsers, 
  FaFlag, 
  FaClock,
  FaRobot,
  FaChalkboardTeacher,
  FaHandshake,
  FaEye,
  FaBolt
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

export interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  glow: string;
}

export const technicalSkills: Skill[] = [
  { name: 'HTML', icon: <FaHtml5 className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#E34F26', glow: 'rgba(227, 79, 38, 0.2)' },
  { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#1572B6', glow: 'rgba(21, 114, 182, 0.2)' },
  { name: 'JavaScript', icon: <IoLogoJavascript className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.2)' },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#3178C6', glow: 'rgba(49, 120, 198, 0.2)' },
  { name: 'React', icon: <FaReact className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.2)' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#38B2AC', glow: 'rgba(56, 178, 172, 0.2)' },
  { name: 'Bootstrap', icon: <FaBootstrap className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#7952B3', glow: 'rgba(121, 82, 179, 0.2)' },
  { name: 'Git', icon: <FaGitAlt className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#F05032', glow: 'rgba(240, 80, 50, 0.2)' },
  { name: 'Figma', icon: <FaFigma className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#F24E1E', glow: 'rgba(242, 78, 30, 0.2)' },
  { name: 'AI Prompt Engineering', icon: <FaRobot className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#10B981', glow: 'rgba(16, 185, 129, 0.2)' },
];

export const softSkills: Skill[] = [
  { name: 'Problem Solving', icon: <FaPuzzlePiece className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#F97316', glow: 'rgba(249, 115, 22, 0.2)' },
  { name: 'Effective Communication', icon: <FaComments className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#06B6D4', glow: 'rgba(6, 182, 212, 0.2)' },
  { name: 'Mentoring & Teaching', icon: <FaChalkboardTeacher className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#14B8A6', glow: 'rgba(20, 184, 166, 0.2)' },
  { name: 'Team Collaboration', icon: <FaHandshake className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#0EA5E9', glow: 'rgba(14, 165, 233, 0.2)' },
  { name: 'Multitasking', icon: <FaLayerGroup className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#A855F7', glow: 'rgba(168, 85, 247, 0.2)' },
  { name: 'Teamwork', icon: <FaUsers className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#10B981', glow: 'rgba(16, 185, 129, 0.2)' },
  { name: 'Leadership', icon: <FaFlag className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#EF4444', glow: 'rgba(239, 68, 68, 0.2)' },
  { name: 'Time Management', icon: <FaClock className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#EAB308', glow: 'rgba(234, 179, 8, 0.2)' },
  { name: 'Attention to Detail', icon: <FaEye className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#F43F5E', glow: 'rgba(244, 63, 94, 0.2)' },
  { name: 'Fast Delivery', icon: <FaBolt className="w-6 h-6" aria-hidden="true" focusable="false" />, color: '#3B82F6', glow: 'rgba(59, 130, 246, 0.2)' },
];
