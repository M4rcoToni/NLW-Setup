import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { ScrollView, View, Text } from 'react-native';
import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { CheckBox } from '../components/CheckBox';


interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;
  const paresedDate = dayjs(date);
  const dayofWeek = paresedDate.format('dddd')
  const dayAndMonth = paresedDate.format('DD/MM');
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className='mt-6 text-zinc-400 font-semibold text-base lowercase'>
          {dayofWeek}
        </Text>

        <Text className=' text-white font-extrabold text-3xl'>
          {dayAndMonth}
        </Text>

        <ProgressBar progress={30}
        />

        <View className='mt-6'>
          <CheckBox
            title='Beber 2L de água'
            checked={false}
          />
          <CheckBox
            title='Caminhar'
            checked={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}