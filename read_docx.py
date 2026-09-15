import zipfile
import xml.etree.ElementTree as ET
import glob
import os

docx_path = r'd:\WebHocCap1\ĐỀ TOÁN tuần 2.docx'


with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')

tree = ET.fromstring(xml_content)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
text = '\n'.join([node.text for node in tree.findall('.//w:t', ns) if node.text])

with open(r'd:\WebHocCap1\temp_docx.txt', 'w', encoding='utf-8') as f:
    f.write(text)
