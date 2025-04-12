import { SetStateAction, useState } from 'react';
import { Search, PlusCircle, Trash2, Edit, Award, BookOpen, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, BarChart2 } from 'lucide-react';

export default function Dashboard() {
  // State management
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([
    { id: 1, title: 'JavaScript Fundamentals', category: 'Programming', completions: 243, status: 'active', quizCount: 5, lessons: 12, difficulty: 'Beginner' },
    { id: 2, title: 'React for Beginners', category: 'Web Development', completions: 187, status: 'active', quizCount: 4, lessons: 8, difficulty: 'Intermediate' },
    { id: 3, title: 'Advanced CSS Techniques', category: 'Web Design', completions: 129, status: 'draft', quizCount: 3, lessons: 10, difficulty: 'Advanced' }
  ]);
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'JavaScript Basics Quiz', courseId: 1, questions: 10, completions: 215, averageScore: 78 },
    { id: 2, title: 'React Components Quiz', courseId: 2, questions: 15, completions: 156, averageScore: 82 },
    { id: 3, title: 'CSS Grid Challenge', courseId: 3, questions: 8, completions: 94, averageScore: 65 }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('course');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);

  // Modal form state
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    difficulty: 'Beginner',
    lessons: 0,
    courseId: 1,
    questions: 0
  });

  // Handle search
  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  // Filter items based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle course expansion
  const toggleCourseExpansion = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  // Handle add new item
  const openAddModal = (type: SetStateAction<string>) => {
    setModalType(type);
    setSelectedItem(null);
    setFormData({
      title: '',
      category: '',
      difficulty: 'Beginner',
      lessons: 0,
      courseId: courses[0]?.id || 1,
      questions: 0
    });
    setShowAddModal(true);
  };

  // Handle edit item
  const openEditModal = (type: SetStateAction<string>, item: SetStateAction<null>) => {
    setModalType(type);
    setSelectedItem(item);

    if (type === 'course') {
      setFormData({
        title: item.title,
        category: item.category,
        difficulty: item.difficulty,
        lessons: item.lessons
      });
    } else {
      setFormData({
        title: item.title,
        courseId: item.courseId,
        questions: item.questions
      });
    }

    setShowAddModal(true);
  };

  // Handle form data change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'lessons' || name === 'questions' ? parseInt(value) || 0 : value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (modalType === 'course') {
      if (selectedItem) {
        // Update existing course
        setCourses(courses.map(course =>
          course.id === selectedItem.id ? { ...course, ...formData, status: 'active' } : course
        ));
      } else {
        // Add new course
        const newCourse = {
          id: courses.length ? Math.max(...courses.map(c => c.id)) + 1 : 1,
          ...formData,
          status: 'active',
          completions: 0,
          quizCount: 0
        };
        setCourses([...courses, newCourse]);
      }
    } else {
      if (selectedItem) {
        // Update existing quiz
        setQuizzes(quizzes.map(quiz =>
          quiz.id === selectedItem.id ? { ...quiz, ...formData } : quiz
        ));
      } else {
        // Add new quiz
        const newQuiz = {
          id: quizzes.length ? Math.max(...quizzes.map(q => q.id)) + 1 : 1,
          ...formData,
          completions: 0,
          averageScore: 0
        };
        setQuizzes([...quizzes, newQuiz]);

        // Update quiz count for the course
        setCourses(courses.map(course =>
          course.id === formData.courseId ? { ...course, quizCount: course.quizCount + 1 } : course
        ));
      }
    }

    setShowAddModal(false);
  };

  // Delete item
  const handleDelete = (type: string, id: number) => {
    if (type === 'course') {
      setCourses(courses.filter(course => course.id !== id));
      // Also delete associated quizzes
      setQuizzes(quizzes.filter(quiz => quiz.courseId !== id));
    } else {
      const quizToDelete = quizzes.find(quiz => quiz.id === id);
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));

      // Update quiz count for the course
      if (quizToDelete) {
        setCourses(courses.map(course =>
          course.id === quizToDelete.courseId ? { ...course, quizCount: course.quizCount - 1 } : course
        ));
      }
    }
  };

  // Get course related quizzes
  const getCourseQuizzes = (courseId: number) => {
    return quizzes.filter(quiz => quiz.courseId === courseId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Award className="mr-2" size={24} />
              <h1 className="text-2xl font-bold">SkillMaster Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors flex items-center">
                <ArrowLeft className="mr-2" size={16} />
                Back to Site
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <BookOpen className="text-purple-600" size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Total Courses</h2>
                <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Total Quizzes</h2>
                <p className="text-2xl font-bold text-gray-800">{quizzes.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <BarChart2 className="text-green-600" size={24} />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">Total Completions</h2>
                <p className="text-2xl font-bold text-gray-800">
                  {courses.reduce((sum, course) => sum + course.completions, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs & Search */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-3 font-medium ${activeTab === 'courses' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('courses')}
                >
                  Courses
                </button>
                <button
                  className={`px-4 py-3 font-medium ${activeTab === 'quizzes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('quizzes')}
                >
                  Quizzes
                </button>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <button
                  className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center"
                  onClick={() => openAddModal(activeTab === 'courses' ? 'course' : 'quiz')}
                >
                  <PlusCircle className="mr-2" size={16} />
                  Add {activeTab === 'courses' ? 'Course' : 'Quiz'}
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'courses' ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completions</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredCourses.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No courses found</td>
                      </tr>
                    ) : (
                      filteredCourses.map(course => (
                        <div key={course.id}>
                          <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleCourseExpansion(course.id)}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="text-sm font-medium text-gray-900">{course.title}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{course.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'}`}
                              >
                                {course.difficulty}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {course.completions}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex items-center justify-end space-x-3">
                                <button
                                  className="text-indigo-600 hover:text-indigo-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openEditModal('course', course);
                                  }}
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  className="text-red-600 hover:text-red-900"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete('course', course.id);
                                  }}
                                >
                                  <Trash2 size={16} />
                                </button>
                                {expandedCourse === course.id ? (
                                  <ChevronUp size={16} className="text-gray-400" />
                                ) : (
                                  <ChevronDown size={16} className="text-gray-400" />
                                )}
                              </div>
                            </td>
                          </tr>
                          {expandedCourse === course.id && (
                            <tr>
                              <td colSpan="6" className="px-6 py-4 bg-gray-50">
                                <div className="text-sm text-gray-700">
                                  <h3 className="font-medium mb-2">Related Quizzes</h3>
                                  {getCourseQuizzes(course.id).length === 0 ? (
                                    <p>No quizzes for this course</p>
                                  ) : (
                                    <div className="border border-gray-200 rounded-md overflow-hidden">
                                      <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                          <tr>
                                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quiz Title</th>
                                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questions</th>
                                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completions</th>
                                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                          {getCourseQuizzes(course.id).map(quiz => (
                                            <tr key={quiz.id} className="hover:bg-gray-100">
                                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{quiz.title}</td>
                                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{quiz.questions}</td>
                                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{quiz.completions}</td>
                                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{quiz.averageScore}%</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  )}
                                  <div className="mt-4">
                                    <button
                                      className="text-indigo-600 text-sm font-medium flex items-center hover:text-indigo-800"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setFormData({...formData, courseId: course.id});
                                        openAddModal('quiz');
                                      }}
                                    >
                                      <PlusCircle size={16} className="mr-1" />
                                      Add quiz to this course
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </div>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questions</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completions</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredQuizzes.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No quizzes found</td>
                      </tr>
                    ) : (
                      filteredQuizzes.map(quiz => (
                        <tr key={quiz.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{quiz.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {courses.find(course => course.id === quiz.courseId)?.title || 'Unknown Course'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quiz.questions}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quiz.completions}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quiz.averageScore}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-3">
                              <button
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => openEditModal('quiz', quiz)}
                              >
                                <Edit size={16} />
                              </button>
                              <button
                                className="text-red-600 hover:text-red-900"
                                onClick={() => handleDelete('quiz', quiz.id)}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-lg font-medium mb-4">
              {selectedItem ? `Edit ${modalType === 'course' ? 'Course' : 'Quiz'}` : `Add New ${modalType === 'course' ? 'Course' : 'Quiz'}`}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={`Enter ${modalType} title`}
                />
              </div>

              {modalType === 'course' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter category"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                    <select
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Lessons</label>
                    <input
                      type="number"
                      name="lessons"
                      value={formData.lessons}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      min="0"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                    <select
                      name="courseId"
                      value={formData.courseId}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Questions</label>
                    <input
                      type="number"
                      name="questions"
                      value={formData.questions}
                      onChange={handleFormChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      min="0"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md"
                onClick={handleSubmit}
              >
                {selectedItem ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
