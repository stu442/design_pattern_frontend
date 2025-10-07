import PageLayout from '../layouts/PageLayout.jsx';
import ProviderExample from '../../03_provider/ProviderExample.jsx';

export default function ProviderPage() {
  return (
    <PageLayout
      title="Context Provider 패턴"
      description="Context Provider를 사용하면 컴포넌트 트리 깊숙한 곳까지 props를 전달하지 않고도 데이터를 공유할 수 있습니다."
    >
      <ProviderExample />
    </PageLayout>
  );
}
