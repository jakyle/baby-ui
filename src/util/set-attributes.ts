export function setAttributes(node: HTMLElement, attributes: Record<string, string>) {
    const applyAttributes = () => {
      Object.entries(attributes).forEach(([k, v]) => {
        if (v !== undefined) {
          node.setAttribute(k, v);
        } else {
          node.removeAttribute(k);
        }
      });
    };
    applyAttributes();
    return {
      update(updatedAttributes: Record<string, string>) {
        attributes = updatedAttributes;
        applyAttributes();
      }
    };
  }