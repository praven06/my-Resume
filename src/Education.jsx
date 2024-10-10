import React from 'react';

function Education() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-teal-400 text-2xl font-bold mb-6">Education</h3>
      <ul className="space-y-6">
        {/* Education Entry 1 */}
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-2">Expected in 2027</p>
          <div>
            <p className="text-gray-100 text-lg font-semibold">Bachelor of Computer Science</p>
            <p className="text-gray-400 text-sm">Sri Krishna College of Engineering and Technology, Coimbatore, India</p>
          </div>
        </li>
        {/* Education Entry 2 */}
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-2">2022-23</p>
          <div>
            <p className="text-gray-100 text-lg font-semibold">Higher Secondary Education</p>
            <p className="text-gray-400 text-sm">Little Flower Convent Matriculation Higher Secondary School, Tiruppur, India</p>
          </div>
        </li>
        {/* Education Entry 3 */}
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-2">2020-21</p>
          <div>
            <p className="text-gray-100 text-lg font-semibold">Secondary Education</p>
            <p className="text-gray-400 text-sm">Little Flower Convent Matriculation Higher Secondary School, Tiruppur, India</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;
