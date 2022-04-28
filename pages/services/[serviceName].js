import React from 'react';
import Layout from '../../components/Layout';
import FullWidth from './FullWidth';
import HalfWidth from './HalfWidth';
import { useRouter } from 'next/router';

const services = {
  'project': {
    icon: `/static/images/icon-project.png`,
    image: `/static/images/image-project.png`,
    title: 'BIM專案執行 / 諮詢服務',
    context: [
      'BIM模型建置及出圖 (包含建築、結構、機電、土木、道路、軌道、橋梁等各專業領域)',
      'BIM模型介面整合及衝突檢討',
      '數量計算及成本控管',
      '施工順序與工期排程服務 (4D排程)',
      'BIM專案管理服務',
      '鋼構接頭及鋼筋節點建置檢討 (Shop Drawing)',
      '預製預組 (Modular and prefabricated buildings)',
      '光達鐳射掃瞄與BIM整合應用 (Scan to BIM)',
      '地理資訊系統 (GIS)與建築資訊模型(BIM)整合應用',
      '符合綠建築認證需求的建築物理環境與能源模擬分析', '營運管理模型建置及管理平台建置服務',
      '企業BIM諮詢及流程導入服務'
    ]
  },
  'analysis': {
    icon: `/static/images/icon-analysis.png`,
    image: `/static/images/image-analysis.png`,
    title: '專案分析服務',
    context: [
      '室外環境風場與室內通風模擬。',
      '建築物能源模擬分析。',
      '自然採光及人造光源模擬。',
      '眩光舒適度模擬。',
      '人流模擬分析。',
      '碳足跡計算。',
      '消防排煙模擬。'
    ]
  },
  'education': {
    icon: `/static/images/icon-education.png`,
    image: '',
    title: 'BIM教育訓練課程',
    context: ''
  },
  'certificate': {
    icon: `/static/images/icon-certificate.png`,
    image: `/static/images/image-certificate.png`,
    title: '驗證服務',
    context: [
      'ISO 19650專案驗證服務。',
      'LEED 認證服務。',
      'EEWH綠建築認證服務。',
      'LCBA碳足跡認證服務。',
      'WELL健康建築認證。',
      '廠房整合規劃與ISO、HACCP驗證。',
      '竣工BIM模型鐳射掃描驗證服務。'
    ]
  },
  'scan-to-bin': {
    icon: `/static/images/icon-scan-to-bim.png`,
    image: `/static/images/image-scan-to-bim.png`,
    title: 'Scan to BIM服務',
    context: [
      '既有建物掃描保存及BIM模型建置服務。',
      '既有管線掃描保存及BIM模型建置服務。',
      '隱蔽工程紀錄及BIM模型竣工查證。',
      '新舊建物規劃整合應用。',
      '廠房製程變更掃描既有場景及BIM模型建置服務。',
      '表面平整度查驗服務。',
      '三維尺寸測量與精度分析。'
    ]
  },
  'integration': {
    icon: `/static/images/icon-integration.png`,
    image: '',
    title: '整合設計服務',
    context: '提供客戶完整的建築工程整合服務，由SGS的整合設計團隊，包括建築師及專業技師...等，從規劃設計階段開始，運用各種BIM技術進行溝通檢討；並採用永續分析手法優化建築物性能，及提前檢討管路、設備、管道間等分配，進行建築物管路設備最佳化設計，最終直接由BIM模型出圖，讓BIM模型等同於施工圖，減少施工失誤，真正達到節省成本目標，讓客戶的受益達到最大化。'
  },
};

export default (props) => {
  const router = useRouter()
  const { serviceName } = router.query;

  return (
    <Layout>
      <section className="hero is-fullheight-with-navbar" >
        <div className="hero-body" style={{ justifyContent: 'center', paddingBottom: 0 }}>
          {
            ['project', 'analysis', 'certificate', 'scan-to-bin'].includes(serviceName)
              ? <HalfWidth {...services[serviceName]}/>
              : <FullWidth {...services[serviceName]} serviceName={serviceName}/>
          }
        </div>
      </section>
    </Layout>
  )
};