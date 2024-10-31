// src/models/mockData.js
import ABETCoordinator from './ABETCoordinator';
import Faculty from './Faculty';
import Course from './Course';
import Material from './Material';

// Mock data for ABET Coordinator and Faculty
export const users = {
  abetCoordinator: new ABETCoordinator('abetCoordinator1', 'password123'),
  faculty1: new Faculty('faculty1', 'password123'),
  faculty2: new Faculty('faculty2', 'password456')
};

// Mock courses
export const courses = [
  new Course('CS101', 'Introduction to Computer Science'),
  new Course('CS202', 'Data Structures')
];

// **Add `facultyCourses` as a separate export** for the Faculty Dashboard
export const facultyCourses = [
  new Course('CS101', 'Introduction to Computer Science'),
  new Course('CS202', 'Data Structures')
];

// Mock submissions
export const submissions = [
  { id: 1, title: 'Homework 1', status: 'Unreviewed', faculty: 'faculty1' },
  { id: 2, title: 'Project 1', status: 'Needs Revision', faculty: 'faculty2' }
];

// Mock semesters
export const semesters = [
  { id: 1, name: 'Fall 2024', courses: [] },
  { id: 2, name: 'Spring 2025', courses: [] }
];

// **Add `todoItems` as a separate export** for the Faculty To-Do List
export const todoItems = [
  { id: 1, title: 'Upload Midterm Exam for CS101', course: 'CS101', completed: false },
  { id: 2, title: 'Upload Final Project for CS202', course: 'CS202', completed: false }
];
