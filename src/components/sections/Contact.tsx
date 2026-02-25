import { Form, Input, Button } from 'antd';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const { TextArea } = Input;

interface ContactProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onSubmit?: (values: { name: string; email: string; message: string }) => void;
}

export function Contact({
  title = 'Get in Touch',
  description = 'Have a project in mind? Let\'s create something great together.',
  buttonText = 'Send Message',
  onSubmit,
}: ContactProps) {
  const [form] = Form.useForm();

  const handleFinish = (values: { name: string; email: string; message: string }) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.resetFields();
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {title}
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinish}
              requiredMark={false}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                  className="mb-0"
                >
                  <Input
                    placeholder="Your Name"
                    className="
                      !border-t-0 !border-l-0 !border-r-0 !rounded-none 
                      !border-b !border-b-gray-300 !px-0 !py-4
                      !text-base !bg-transparent
                      focus:!shadow-none focus:!border-b-black
                      hover:!border-b-gray-400
                      placeholder:!text-gray-400
                      transition-all duration-200
                    "
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                  className="mb-0"
                >
                  <Input
                    placeholder="Your Email"
                    className="
                      !border-t-0 !border-l-0 !border-r-0 !rounded-none 
                      !border-b !border-b-gray-300 !px-0 !py-4
                      !text-base !bg-transparent
                      focus:!shadow-none focus:!border-b-black
                      hover:!border-b-gray-400
                      placeholder:!text-gray-400
                      transition-all duration-200
                    "
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
                className="mb-0"
              >
                <TextArea
                  placeholder="Your Message"
                  rows={5}
                  className="
                    !border-t-0 !border-l-0 !border-r-0 !rounded-none 
                    !border-b !border-b-gray-300 !px-0 
                    !text-base !bg-transparent !resize-none
                    focus:!shadow-none focus:!border-b-black
                    hover:!border-b-gray-400
                    placeholder:!text-gray-400
                    transition-all duration-200
                  "
                />
              </Form.Item>

              <Form.Item className="mb-0 pt-4">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="
                    !bg-black !text-white !border-none
                    !rounded-none !px-10 !py-5 !h-auto
                    !text-base !font-medium
                    hover:!bg-gray-900
                    transition-colors duration-200
                  "
                >
                  {buttonText}
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
