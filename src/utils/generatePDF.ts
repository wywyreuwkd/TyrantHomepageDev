// 브라우저의 네이티브 인쇄 기능을 사용하여 PDF 생성
export async function generateStyleGuidePDF() {
  try {
    // 인쇄 전 페이지 준비
    const body = document.body;
    const originalOverflow = body.style.overflow;
    
    // 페이지를 인쇄 모드로 설정
    body.style.overflow = 'visible';
    
    // 인쇄 대화상자 열기
    window.print();
    
    // 원래 상태로 복구
    body.style.overflow = originalOverflow;
    
  } catch (error) {
    console.error('PDF 생성 오류:', error);
    throw error;
  }
}
