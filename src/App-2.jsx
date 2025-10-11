import { Card } from "./components/card";

export default function MainApp() {
  // Cart içersinde tıklanabilme özelliği kazandıralım
  return (
    <div style={{
      display: 'flex',
      gap: 10,
      width: '100%',
      justifyContent: 'center'
    }}>
      <Card
        title="React Reusable Component"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, doloribus tenetur? Cum maiores nam incidunt sed, ex id eius. Porro vitae aperiam amet magnam temporibus facilis! Fugit repudiandae soluta nobis!"
        imageUrl="https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1920&q=60&auto=format,compress"
      />

      <Card
        title="React Reusable Component"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, doloribus tenetur? Cum maiores nam incidunt sed, ex id eius. Porro vitae aperiam amet magnam temporibus facilis! Fugit repudiandae soluta nobis!"
        imageUrl="https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1920&q=60&auto=format,compress"
      />

      <Card
        title="React Reusable Component"
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, doloribus tenetur? Cum maiores nam incidunt sed, ex id eius. Porro vitae aperiam amet magnam temporibus facilis! Fugit repudiandae soluta nobis!"
        imageUrl="https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1920&q=60&auto=format,compress"
      />
    </div>
  );
}
