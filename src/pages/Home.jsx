import PageLayout from '../layouts/PageLayout.jsx';

export default function Home() {
  return (
    <PageLayout
      title="패턴을 선택하세요"
      description="왼쪽 목록에서 학습하고 싶은 패턴을 선택하면 예제를 확인할 수 있습니다."
    >
      <p style={styles.body}>
        각 패턴은 React 컴포넌트로 구현되어 있으며, 라우팅을 통해 쉽게 이동할 수 있습니다.
      </p>
    </PageLayout>
  );
}

const styles = {
  body: {
    margin: 0,
    color: '#475569',
    lineHeight: 1.6,
  },
};
