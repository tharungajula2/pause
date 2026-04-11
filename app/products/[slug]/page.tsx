import { notFound } from 'next/navigation';
import { products } from '../../data/products';
import { CtaButton } from '../../components/ui/CtaButton';
import { ProductHeroStage } from '../../components/product/ProductHeroStage';
import { StrategicIntelligenceRail } from '../../components/product/StrategicIntelligenceRail';
import { CrossLinkSystem } from '../../components/product/CrossLinkSystem';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen selection:bg-gold selection:text-white bg-background">


      {/* Page Architecture */}
      <article className="pt-20">
        <ProductHeroStage product={product} />
        <StrategicIntelligenceRail product={product} />
        <CrossLinkSystem currentProduct={product} />
      </article>


    </main>
  );
}
