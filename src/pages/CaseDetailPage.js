import React from 'react';
import { useParams } from 'react-router-dom';

function CaseDetailPage() {
  const { id } = useParams();

  return (
    <div className="page-container">
      <h1>案例详情 #{id}</h1>
      <p>这里是案例 #{id} 的详细内容。</p>
    </div>
  );
}

export default CaseDetailPage;