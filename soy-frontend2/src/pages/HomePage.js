import React from 'react';
import { Link } from 'react-router-dom';
import { FaWaveSquare } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="p-lg">
      <h1 className="text-textPrimary text-3xl mb-lg">포장지 비교</h1>
      <p className="text-textSecondary mb-xl max-w-[800px] leading-relaxed">
        포장지 수정 전 후 비교
        오타 및 디자인 수정 사항을 체크합니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg mt-xl">
        <Link 
          to="/soyanalysis"
          className="bg-surface rounded-md p-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-fast flex flex-col items-center text-center"
        >
          <div className="text-5xl text-primary mb-md">
            <FaWaveSquare />
          </div>
          <h3 className="text-textPrimary text-xl mb-md">포장지 비교</h3>
          <p className="text-textSecondary text-sm">
            포장지 비교
          </p>
        </Link>

        {/* <Link 
          to="/soymilk"
          className="bg-surface rounded-md p-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-fast flex flex-col items-center text-center"
        >
          <div className="text-5xl text-primary mb-md">
            <FaWaveSquare />
          </div>
          <h3 className="text-textPrimary text-xl mb-md">두유 이미지 처리</h3>
          <p className="text-textSecondary text-sm">
            두유 농도 이미지를 처리하여 예측을 돕습니다.
          </p>
        </Link>

        <Link 
          to="/soyvid"
          className="bg-surface rounded-md p-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-fast flex flex-col items-center text-center"
        >
          <div className="text-5xl text-primary mb-md">
            <FaWaveSquare />
          </div>
          <h3 className="text-textPrimary text-xl mb-md">두유 영상 예측</h3>
          <p className="text-textSecondary text-sm">
            두유 측정기 영상에서 농도를 예측합니다.
          </p>
        </Link> */}
      </div>
    </div>
  );
};

export default HomePage; 